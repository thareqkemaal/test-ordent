import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const TaskEmpat = () => {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [result, setResult] = useState("");
    const [error, setError] = useState(false);

    useEffect(() => {
        if (error) {
            setTimeout(() => {
                setError(false);
            }, 3000)
        }
    }, [error]);

    useEffect(() => {
        setError(false);
        setResult("");
        const remain = findAcronym(firstName, lastName);

        setResult(remain);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [result, firstName, lastName]);

    const findAcronym = (a, b) => {
        const regex = /[\s-]/;
        // check a
        let acronymA = [];
        if (regex.test(a)) {
            const newA = a.split(regex);
            for (let i = 0; i < newA.length; i++){
                const newAcronymA = newA[i] && String(newA[i][0]).toUpperCase();
                acronymA.push(newAcronymA);
            }
        } else {
            const newAcronymA = a && String(a[0]).toUpperCase();
            acronymA.push(newAcronymA);
        }
        
        // check b
        let acronymB = [];
        if (regex.test(b)) {
            const newB = b.split(regex);
            if (newB && newB[0] === "von") {
                acronymB.push("v");
                newB.shift();
            }

            for (let i = 0; i < newB.length; i++){
                const newAcronymB = newB[i] && String(newB[i][0]).toUpperCase();
                acronymB.push(newAcronymB);
            }
        } else {
            const newAcronymB = b && String(b[0]).toUpperCase();
            acronymB.push(newAcronymB);
        }

        return [...acronymA, ...acronymB].join("");
    }; 

    const validateNames = (names, type) => {
        if (names) {
            const regexSpecificLetters = /^[a-zA-Z\s-]+$/; // only alphabets and - and space
            if (!regexSpecificLetters.test(names)) return false;
    
            const regex = /[\s-]/;
            const splitNames = regex.test(names) && names.split(regex);
            if (splitNames.length > 1){
                // check includes "von"
                const prefix = "von";
                if (type === "last" && splitNames && splitNames[0].includes(prefix)) {
                    const newString = names.split(`${prefix} `).join("");
                    const splitNewString = regex.test(newString) && newString.split(regex);   
                    
                    if (splitNewString.length > 1){
                        const lastIndex = splitNewString[splitNewString.length - 1];
                        if (regex.test(lastIndex)) return false;
                        if (splitNewString.length > 2 && lastIndex === "") return false;
                    }
                    return true;
                }
                const lastIndex = splitNames[splitNames.length - 1];
                if (regex.test(lastIndex)) return false;
                if (splitNames.length > 2 && lastIndex === "") return false;
            }
        }

        return true;
    };

    return (
        <div className="p-5">
            <div className="border-2 rounded-lg border-black w-fit p-3">
                <div className="grid grid-cols-2">
                    <div className="flex justify-between mr-2">
                        <p>First Name</p>
                        <p>=</p>
                    </div>
                    <input 
                        id="firstName" 
                        type="text" 
                        value={firstName} 
                        onChange={(e) => {
                            if (validateNames(e.target.value, "first")) {
                                setFirstName(e.target.value)
                            } else {
                                setError(true);
                            }
                        }}
                        className="border-b-2 border-black"
                    />
                </div>
                <div className="grid grid-cols-2">
                    <div className="flex justify-between mr-2">
                        <p>Last Name</p>
                        <p>=</p>
                    </div>
                    <input
                        id="lastName"
                        type="text"
                        value={lastName}
                        onChange={(e) => {
                            if (validateNames(e.target.value, "last")) {
                                setLastName(e.target.value)
                            } else {
                                setError(true);
                            }
                        }}
                        className="border-b-2 border-black"
                    />
                </div>
                <div className="grid grid-cols-2">
                    <div className="flex justify-between mr-2">
                        <p>Acronym</p>
                        <p>=</p>
                    </div>
                    <div className="flex justify-between mr-2">
                        <p>{result}</p>
                    </div>
                </div>
            </div>
            <p className="text-sm text-red-500">{error && "First and Last Name can only 2 words. example: John Durant or John-Durant or von John-Durant"}</p>
            <button 
                className="border border-black rounded-lg px-2 mt-2 hover:bg-gray-200"
                onClick={() => navigate("/")}>Back</button>
        </div>
    )
};

export default TaskEmpat;