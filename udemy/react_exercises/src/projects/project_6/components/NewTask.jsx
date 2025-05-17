import { useState } from "react";

const NewTask = ({onAdd}) => {
    const [enterdTask, setEnteredTask] = useState("")

    function handleChange(e){
        setEnteredTask(e.target.value);
    }

    function handleClick(){
        if(enterdTask.trim() === ''){
            return;
        }
        onAdd(enterdTask);
        setEnteredTask("");
    }
    return (
        <div className="flex items-center gap-4">
            <input 
                type="text" 
                className="w-64 px-2 py-1 rounded-sm bg-stone-200"
                onChange={handleChange}
                value={enterdTask}
            />
            <button
                onClick={handleClick}
                className="text-stone-700 hover:text-stone-950">Add Task</button>
        </div>
    )
    }

export default NewTask