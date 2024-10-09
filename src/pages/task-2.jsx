import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const TaskDua = () => {
    const navigate = useNavigate();
    const [firstNum, setFirstNum] = useState(0);
    const [secondNum, setSecondNum] = useState(0);
    const [remainder, setRemainder] = useState(0);
    const [description, setDescription] = useState("");

    useEffect(() => {
        setDescription("");
        const remain = calculate(firstNum, secondNum);
        if (isNaN(remain)) {
            setDescription("");
        }
        setRemainder(remain);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [description, firstNum, secondNum]);

    const calculate = (a, b) => {
        if (a === 0 && b === 0) return 0;

        if (a > b) {
            // console.log(a, "%", b, "=>", a%b)
            setDescription(`remainder of ${a} / ${b}`);
            return a % b;
        }
        
        if (b > a) {
            // console.log(b, "%", a, "=>", b%a)
            setDescription(`remainder of ${b} / ${a}`);
            return b % a;
        }
        return;
    }; 


    return (
        <div className="p-5">
            <div className="border-2 rounded-lg border-black w-fit p-3">
                <div className="grid grid-cols-2">
                    <div className="flex justify-between mr-2">
                        <p>First Number</p>
                        <p>=</p>
                    </div>
                    <input 
                        id="firstNum" 
                        type="text" 
                        value={firstNum} 
                        onChange={(e) => setFirstNum(e.target.value)}
                        className="border-b-2 border-black"
                    />
                </div>
                <div className="grid grid-cols-2">
                    <div className="flex justify-between mr-2">
                        <p>Second Number</p>
                        <p>=</p>
                    </div>
                    <input
                        id="secondNum"
                        type="text"
                        value={secondNum}
                        onChange={(e) => setSecondNum(e.target.value)}
                        className="border-b-2 border-black"
                    />
                </div>
                <div className="grid grid-cols-2">
                    <div className="flex justify-between mr-2">
                        <p>Remainder</p>
                        <p>=</p>
                    </div>
                    <div className="flex justify-between mr-2">
                        <p>{remainder}</p>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
            <button 
                className="border border-black rounded-lg px-2 mt-2 hover:bg-gray-200"
                onClick={() => navigate("/")}
            >
                Back
            </button>
        </div>
    )
};

export default TaskDua;