import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputBox from './inputBox'
import TaskList from './taskList'
import FocusList from './focusList'
import FocusItem from './focusItem'
import Finished from './Finished'
import { Route, Routes, useNavigate } from 'react-router'

function App() {
const [tasks, setTasks]= useState([])
const [focusList, setFocusList] = useState([])
const [finishedList, setFinishedList ] = useState([])
// const navigate = useNavigate()
  function addNewList(newTask)
  {
    newTask.currentDateTime = new Date().toLocaleString()
    setTasks(prev=>[...prev,{...newTask,currentDateTime: new Date().toLocaleString()}])
  }
  function deleteTask(id){
    setTasks(tasks.filter((task)=> task.id !== id))
    setFocusList(focusList.filter(focusItem=> focusItem.id !== id))
    setFinishedList(finishedList.filter(item=> item.id !== id))
  }
  function updateFocusList(task){
    if(focusList.some((focusItem)=> focusItem.id === task.id)) return;
    setFocusList((prev)=> [...prev, {...task,currentDateTime: new Date().toLocaleString()}])
  }
  function updateFinishedList(item){
    if(finishedList.some((finishedItem)=> finishedItem.id === item.id)) return;
    setFinishedList((prev)=> [...prev,{...item,currentDateTime: new Date().toLocaleString()}])
    setFocusList(focusList.filter(focusItem=> focusItem.id !== item.id))
    setTasks(tasks.filter(task=> task.id !== item.id))
  }
  
   return (
    <>
    <div className='flex flex-col justify-center items-center'>
    <div><InputBox addNewTask={addNewList} /></div>
    <div className='flex items-start gap-6 w-full relative top-12'>
    <TaskList tasks={tasks} deleteTask={deleteTask} addItemFocus={updateFocusList} />
    <FocusList  focusList={focusList} addItemsFinished={updateFinishedList}/>
    <Finished finishedList={finishedList}/>
    </div>
    </div>

    {/* <Routes>
      <Route path ="/finished" element={<Finished />}/>
      <Route path ="input" element={<InputBox />}/>
      <Route path ="/focus" element={<FocusList />}/>
    </Routes> */}
    
    </>
  )
}
export default App
