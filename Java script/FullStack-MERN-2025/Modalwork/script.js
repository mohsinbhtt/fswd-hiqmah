const buttons = document.querySelectorAll('.btn')
const cCont = document.querySelector('.content')
const Close = document.querySelector('.closeBtn')
const cont = document.querySelector('.container')

buttons.addEventListener("click",()=>{
 cont.style.display = "block"
 cont.classList.add = "overlay"
}) 
Close.addEventListener("click", () => {
    cCont.style.display = "none" 
})