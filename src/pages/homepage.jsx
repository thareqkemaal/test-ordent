import { useNavigate } from "react-router-dom";

const Homepage = () => {
    const navigate = useNavigate()

    return (
        <div className="w-full flex-col p-5">
            <div className="font-bold">Test Ordent</div>
            <div className="flex-col my-5">
                <div className="my-2">
                    <button className="border rounded-lg border-black px-4 hover:bg-blue-200" onClick={() => navigate("/task-1")} type="button">
                        Task 1
                    </button>   
                </div>
                <div className="my-2">
                    <button className="border rounded-lg border-black px-4 hover:bg-red-200" onClick={() => navigate("/task-2")} type="button">
                        Task 2
                    </button>   
                </div>
                <div className="my-2">
                    <button className="border rounded-lg border-black px-4 hover:bg-green-200" onClick={() => navigate("/task-3")} type="button">
                        Task 3
                    </button>   
                </div>
                <div className="my-2">
                    <button className="border rounded-lg border-black px-4 hover:bg-yellow-200" onClick={() => navigate("/task-4")} type="button">
                        Task 4
                    </button>   
                </div>
            </div>
        </div>
    )
};

export default Homepage;