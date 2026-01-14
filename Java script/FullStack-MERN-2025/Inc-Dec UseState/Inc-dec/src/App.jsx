import { useState } from 'react'

import './App.css'

function App() {
  const [num, setNum]= useState(0)

  function increment(){
    setNum(num + 1)
  }
  function decrement(){
    setNum(num - 1)
  }

  return (
    <>
    
      <div className='number'>{num}</div>
     <button className='inc'onClick={increment}>Increase</button>
     <button className='dec'onClick={decrement}>Decrease</button>
    </>
  )
}

export default App
