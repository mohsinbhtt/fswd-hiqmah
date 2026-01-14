let decrement = document.querySelector('.minus')
let increment = document.querySelector('.plus')
let number = document.querySelector('h1')
let count = 0;

decrement.addEventListener('click', ()=> {
    count--;
    number.textContent = count
    colorChange()
    // console.log(count)
})
increment.addEventListener('click', ()=> {
    count++;
    number.textContent = count
    colorChange()
    // console.log(count)
})
function colorChange(){
if(count<0){
    number.style.color = "red"}
else if (count > 0){
    number.style.color = "green"}
}