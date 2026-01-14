let age = Number(prompt('Enter your age'))

// let IsWeekEnd;
// let input2 =prompt("is this weekend");
// if (input2=="yes"){
//     IsWeekEnd=true;
//     console.log(IsWeekEnd)
// } else{
//     IsWeekEnd=false;
//     console.log(IsWeekEnd)
// }


// let isStudent;
// let input1 = prompt("are you student");

// if(input1=="yes")
// {
//     isStudent=true;
//     console.log(isStudent);
// } else {
//     isStudent=false;
//     console.log(isStudent);
// } 

// IsWeekEnd = true
// isStudent = false

let IsWeekEnd = prompt('Is this weekend?').trim().toLowerCase();
if (IsWeekEnd === 'yes')
   { IsWeekEnd = true}
else
    {IsWeekEnd = false}

let isStudent = prompt('Are you a student?')
if(isStudent==='yes')
    {isStudent=true}
else
    {isStudent= false}


let finalPrice;
if (age>=5 && IsWeekEnd === true && isStudent === true){
 finalPrice = 300 * 0.5
console.log(finalPrice)
}
else if(age>=5 && IsWeekEnd === false && isStudent === true){
console.log(finalPrice = 200 * 0.5)
}
else if (age>=60 && IsWeekEnd === false && isStudent === true){
console.log(finalPrice = 200 * 0.5)
}
else if (age>=60 && IsWeekEnd === true && isStudent === false){
console.log(finalPrice = 200 * 0.3)
}
else
{
    console.log('Final Ticket Price is 0')
}