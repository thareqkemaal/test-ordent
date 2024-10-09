import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const TaskSatu = () => {
    const navigate = useNavigate();
    const [dir, setDir] = useState("");
    const [path, setPath] = useState("");
    const [path2, setPath2] = useState("");
    const [error, setError] = useState(false);
    const [arrive, setArrive] = useState(false);

    useEffect(() => {
        setDir(dir);
    }, [dir]);

    const setDirection = (value) => {
        if (dir.length === 0) {
            setDir(value);
            if (value === "N") {
                setPath("NWSSEENNWS");
                setPath2("NESSWWNNES");
            } else if (value === "W") {
                setPath("WSEENNWWSE");
                setPath2("WNEESSWWNE");
            } else if (value === "S") {
                setPath("SENNWWSSEN");
                setPath2("SWNNEESSWN");
            } else {
                setPath("ENWWSSEENW");
                setPath2("ESWWNNEESW");
            }
        } else {
            setDir(dir + value);
            let newDir = dir + value;
            let chosenDir = newDir && newDir.split("");
            let chosenPath1 = path && path.split("");
            let chosenPath2 = path2 && path2.split("");

            if (chosenDir.length === chosenPath1.length || chosenDir.length === chosenPath2.length) {
                setArrive(true);
            };

            for (let i = 0; i < chosenDir.length; i++) {
                if (chosenDir.length >= 2 && chosenDir[1] === chosenPath1[1]) { // to path 1
                    if (chosenDir[i] !== chosenPath1[i]) {
                        setError(true);
                        chosenDir.pop();
                        setDir(chosenDir.join(""));
                        setTimeout(() => {
                            setError(false);
                        }, 2000);
                    }
                } else if (chosenDir.length >= 2 && chosenDir[1] === chosenPath2[1]) { // to path 2
                    if (chosenDir[i] !== chosenPath2[i]) {
                        setError(true);
                        chosenDir.pop();
                        setDir(chosenDir.join(""));
                        setTimeout(() => {
                            setError(false);
                        }, 2000);
                    }
                } else {
                    setError(true);
                    chosenDir.pop();
                    setDir(chosenDir.join(""));
                    setTimeout(() => {
                        setError(false);
                    }, 2000);
                }
            }
        }
    };

    const myRoute = () => {
        let myRoute = dir && dir.split("");
        let getStrRoute = [];
        myRoute && myRoute.forEach((item) => {
            if (item === "N") getStrRoute.push("North");
            if (item === "S") getStrRoute.push("South");
            if (item === "W") getStrRoute.push("West");
            if (item === "E") getStrRoute.push("East");
        });

        return (
            <>
                {getStrRoute.length > 1 ? getStrRoute.join(" - ") : getStrRoute[0]}
            </>
        )
    }

    return (
        <div className="p-5">
            <div>
                <div className="flex mb-2">
                    <p className="mr-2">Your Path:</p>
                    {myRoute()}
                </div>
                <div className="border rounded-full w-fit p-2 border-gray-500 bg-gray-300">
                    <div className="grid grid-cols-3">
                        <div></div>
                        <button 
                            disabled={error || arrive}
                            className="border border-black rounded-full px-5 py-4 hover:bg-gray-400 disabled:cursor-not-allowed"
                            id="N"
                            type="button" 
                            onClick={() => setDirection("N")}
                            >
                                N
                        </button>
                        <div></div>
                    </div>
                    <div className="grid grid-cols-3">
                        <button
                            disabled={error || arrive}
                            className="border border-black rounded-full px-5 py-4 hover:bg-gray-400 disabled:cursor-not-allowed"
                            id="E"
                            type="button"
                            onClick={() => setDirection("E")}
                        >
                            E
                        </button>
                        <div></div>
                        <button 
                            disabled={error || arrive}
                            className="border border-black rounded-full px-5 py-4 hover:bg-gray-400 disabled:cursor-not-allowed"
                            id="W"
                            type="button" 
                            onClick={() => setDirection("W")}
                        >
                            W
                        </button>
                    </div>
                    <div className="grid grid-cols-3">
                        <div></div>
                        <button
                            disabled={error || arrive}
                            className="border border-black rounded-full px-5 py-4 hover:bg-gray-400 disabled:cursor-not-allowed"
                            id="S"
                            type="button"
                            onClick={() => setDirection("S")}
                        >
                            S
                        </button>
                        <div></div>
                    </div>

                </div>
                <p className="text-sm text-red-500">{error && "Wrong Direction"}</p>
                <p className="text-sm font-bold text-green-500">{arrive && "You arrived at your starting point!"}</p>
            </div>
            <button 
                className="border border-black rounded-lg px-2 mt-2 hover:bg-gray-200"
                onClick={() => navigate("/")}
            >
                Back
            </button>
            <button 
                className="border border-black rounded-lg px-2 mt-2 ml-20 hover:bg-red-200"
                onClick={() => { 
                    setDir("");
                    setPath("");
                    setError(false);
                    setArrive(false);
                }}
            >
                Clear
            </button>
            <></>
        </div>
    )
};

export default TaskSatu;