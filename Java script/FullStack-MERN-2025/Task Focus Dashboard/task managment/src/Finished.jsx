export default function Finished({finishedList}){

return(
<>
<div className={` ${finishedList.length> 0 ? "p-1.5 border-2 rounded-2xl flex-col w-92" : ""}`}>
    {finishedList.length>0 && <h2 className="text-red-500 font-bold"> Finished Task</h2>}    
    {finishedList.map((finishItem)=>
    <li key={finishItem.id} className="bg-gray-200 text-black p-2 rounded-lg w-full mb-1 flex justify-center  items-center" >
        <div className="w-24 flex justify-self-start">
        {finishItem.text}
        </div>
         <div className="flex flex-col font-bold text-[10px] w-48 justify-self-start">
        {finishItem.currentDateTime} 
        </div>
        <span>✔️</span>    
    </li>
)}
</div>
</>
)
}