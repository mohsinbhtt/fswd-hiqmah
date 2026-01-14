export default function TaskList({ tasks, deleteTask, addItemFocus }) {
    
    return (
    <div className={` ${tasks.length>0 ? "p-1.5 border-2  rounded-2xl  flex-col" : ""}`} >
     {tasks.length>0 && <h2 className="text-red-500 font-bold">Task List</h2>}
      <ul className="w-full">
        {tasks.map(task => (
          <li
            key={task.id}
            className="bg-gray-200 text-black p-2 rounded-lg items-center mb-1 flex w-96  "
          >
            <div className="w-28 flex overflow-hidden justify-self-start">
            {task.text}  
            </div>
            <div className="flex flex-col font-bold text-[10px] align-self-center">
            {task.currentDateTime}
            </div>
            <div className="btns h-10 flex gap-3 w-44  justify-center">
                <button onClick={()=>addItemFocus(task)}
                className="border-b-black rounded-2xl  bg-emerald-700  font-semibold text-white p-1.5 hover:scale-110 hover:shadow-gray-700">Focus</button>

                <button onClick={()=>deleteTask(task.id)}
                 className="border-b-black rounded-2xl bg-red-950 font-semibold text-white p-1.5 hover:scale-110 hover:shadow-gray-700">Deleted</button>
            </div>
          </li>
        ))}
      </ul>
      </div>
    );
  }
  