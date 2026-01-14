rollBtn = document.querySelector('#rbtn') 
message =document.querySelector('h1')
resultNumber = document.querySelector('h2')

rollBtn.addEventListener("click", result) 

   function result (){
    let showNumber = Math.trunc(Math.random() * 6 + 1);
    // console.log(showNumber)
        
    resultNumber.textContent = showNumber
    
    if(showNumber === 6){
    message.style.display ="block"
    }
    else{
    message.style.display ="none"
    }
    }


