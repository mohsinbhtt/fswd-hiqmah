import FocusItem from "./focusItem"
export default function FocusList({focusList,addItemsFinished}){

    // clockTicker(clockCount)
    return(
        <>
        <div className={`  ${focusList.length>0 ? "p-1.5 border-2 m-1 rounded-2xl bg-blue-50 flex-col " : ""}`}>
        {focusList.length>0 && <h2 className="text-red-500 font-bold">Focus List</h2>}
            <ul className="">
                {focusList.map((focusItem, idx)=>
                    <FocusItem key={idx} item={focusItem} addItemsFinished={addItemsFinished}/>
                )}
               
            </ul>
        </div>
        </>
    )
}