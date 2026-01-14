import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
function Paragraph({istline,secondline}){
  return(
  <div>{istline}
    <div>{secondline}</div>
  </div>)
}
function Header({secondContent}){
  return(
    <p>{secondContent}</p>
  )
}
function App({}){
  return(
    <>
    <p>Main</p>
    <Header></Header>
  </>

  )
}
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Header secondContent="hsvdjchvdsjhv"/>
    <Paragraph istline="FirstParagraph" secondline="SecondParagraph"></Paragraph>
  </StrictMode>,
)
