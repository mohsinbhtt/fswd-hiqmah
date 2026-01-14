import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Question({handleSelect,selectedID,id,q,question,answer}) {
  return (
   
      <div className={`flashcards ${selectedID === q.id ? 'selected': ''}`} key={id} onClick={()=>handleSelect(id)}>
        <div className="flashcard-front">{question}</div>
        <div className="flashcard-back">{answer}</div>
      </div>
    
  )
}

function App() {
  const [selectedID,setSelectedID]= useState(null)
  function handleSelect(id) {
    setSelectedID(id)
  }

  const questions = [
    { id: 1, question: "What is React?", answer: "A JavaScript library for building UIs." },
    { id: 2, question: "What is JSX?", answer: "A syntax extension that looks like HTML in JS." },
    { id: 3, question: "What is a component?", answer: "Reusable UI piece (function or class)." },
    { id: 4, question: "What is state?", answer: "Data that changes over time in a component." },
    { id: 5, question: "What is a prop?", answer: "Read-only data passed into components." }
];

return (
    <div className="outer-container">
        {questions.map((q) => (
            <Question handleSelect={handleSelect} q={q} selectedID={selectedID} id={q.id} question={q.question} answer={q.answer} />
        ))}
    </div>
);
}

export default App
