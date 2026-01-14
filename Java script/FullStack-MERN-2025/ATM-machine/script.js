const Pin = 1234;
let Balance = 6000;

// const  mainInput =()=>
// function mainInput()
// {
const  mainInput =()=>{
inputPin = Number(prompt('Enter your PIN'))
if (inputPin === Pin) {
    userOptions()}
else
    {
        console.log('Incorrect PIN');

    }
}
function checkBalance()
{
    console.log(Balance);
}

function DepositBalance(){
 let  depositAmount = Number(prompt('Enter your amount'))
    Balance = Balance + depositAmount
    console.log(Balance);
}
function Withdraw()
{
    
   let withdrawAmount = Number(prompt('Enter your amount'))
    if (withdrawAmount > Balance){
        console.log('Insufficient balance');
    }
    else 
    {
        Balance = Balance - withdrawAmount;
        console.log(Balance);
    }
    
}

function userOptions(){
 let option = Number(prompt('Press an option:\nEnter 1 to check balance\nEnter 2 to Deposit\nEnter 3 to Withdraw\nEnter 4 for Exit'));

switch(option){
    case 1: 
    checkBalance();
    break;
    case 2: 
    DepositBalance();
    break;
    case 3: withdrawAmount();
    break;
    case 4: 
    console.log('Thank you !');
    break;
    default:
        console.log('invalid option!');
}
 }


mainInput();