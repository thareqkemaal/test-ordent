import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const TaskTiga = () => {
    const navigate = useNavigate();
    const [firstStr, setFirstStr] = useState("");
    const [secondStr, setSecondStr] = useState("");
    const [thirdStr, setThirdStr] = useState("");
    const [result, setResult] = useState("");

    useEffect(() => {
        setResult("");
        const remain = combine(firstStr, secondStr, thirdStr);
        setResult(remain);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [result, firstStr, secondStr, thirdStr]);

    const combine = (a, b, c) => {
        console.log(a, b, c);

        const arrA = a.split("");
        // const arrB = b.split("");
        // const arrC = c.split("");

        for (let i = 0; i >= arrA.length; i++){
            console.log(a, "=>", i)
        }

        
    }; 


    return (
        <div className="p-5">
            <div className="border-2 rounded-lg border-black w-fit p-3">
                <div className="grid grid-cols-2">
                    <div className="flex justify-between mr-2">
                        <p>First String</p>
                        <p>=</p>
                    </div>
                    <input 
                        id="firstStr" 
                        type="text" 
                        value={firstStr} 
                        onChange={(e) => setFirstStr(e.target.value)}
                        className="border-b-2 border-black"
                    />
                </div>
                <div className="grid grid-cols-2">
                    <div className="flex justify-between mr-2">
                        <p>Second String</p>
                        <p>=</p>
                    </div>
                    <input
                        id="secondStr"
                        type="text"
                        value={secondStr}
                        onChange={(e) => setSecondStr(e.target.value)}
                        className="border-b-2 border-black"
                    />
                </div>
                <div className="grid grid-cols-2">
                    <div className="flex justify-between mr-2">
                        <p>Third String</p>
                        <p>=</p>
                    </div>
                    <input
                        id="thirdStr"
                        type="text"
                        value={thirdStr}
                        onChange={(e) => setThirdStr(e.target.value)}
                        className="border-b-2 border-black"
                    />
                </div>
                <div className="grid grid-cols-2">
                    <div className="flex justify-between mr-2">
                        <p>Result</p>
                        <p>=</p>
                    </div>
                    <div className="flex justify-between mr-2">
                        <p>{result}</p>
                    </div>
                </div>
            </div>
            <button 
                className="border border-black rounded-lg px-2 mt-2 hover:bg-gray-200"
                onClick={() => navigate("/")}>Back</button>
        </div>
    )
};

export default TaskTiga;