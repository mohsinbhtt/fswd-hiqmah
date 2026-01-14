import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {data} from './data'
// import { profileCard } from './profileCard'

function Container(){
  return(
 <>
  {data.map((emp) =>
 <div className='profile' key={emp.name}>
  <img className='image' src={emp.img} alt="profile" />
  <div className='name'>{emp.name}</div>
  <div className='description'>{emp.description}</div>
  <div className='followers'>{emp.followers}</div>
  <div className='following'>{emp.following}</div>
 </div>
)}

 </>
 )
}
function App() {
  return (
    <div className="App">
      <Container />
    </div>
  )
}
export default App
