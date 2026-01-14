import { useState,useRef,useEffect } from "react"
import "tailwindcss";


export default function InputBox({addNewTask}) {
const [inputValue,setInputValue] = useState('')


const inputFocus = useRef()
function addTask(){
    if(inputValue.trim() === "") return
    const newTask ={
        id : Date.now(),
        text :inputValue,
        completed : false,
        totalSecondsFocused: null
    }
    addNewTask(newTask)
    setInputValue('')
}
useEffect(()=> {
    inputFocus.current?.focus()
},[])

return(
    <>
<input className=" relative top-8 h-10 border-2 w-86 p-1.5 bg-fuchsia-50 rounded-2xl" type="text" value={inputValue} onChange={e=> setInputValue(e.target.value)}  ref={inputFocus}/>
<button className="relative top-8 p-1.5 ml-4 bg-blue-500 font-medium rounded-2xl border-2"
onClick={()=>{addTask()}}>ADD</button>
</>
)
}