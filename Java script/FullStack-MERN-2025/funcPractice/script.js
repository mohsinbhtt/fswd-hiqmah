
// let weekEnd = prompt('is this weekend?')
// let student = prompt(' Are you a student?')

// function isWeekend(){
//     let isStudent;
// let input1 = prompt("are you student");

// if(input1=="yes")
// {
//     isStudent=true;
//     console.log(isStudent);
// } else {
//     isStudent=false;
//     console.log(isStudent);
// } 
// }
// function isStudent(){
//     let IsWeekEnd;
// let input2 =prompt("is this weekend");
// if (input2=="yes"){
//     IsWeekEnd=true;
//     console.log(IsWeekEnd)
// } else{
//     IsWeekEnd=false;
//     console.log(IsWeekEnd)
// }
// }
function isWeekend(weekEnd){
weekEnd ? weekEnd = "a weekend" :  weekEnd = "not a weekend"
return weekEnd;
}
function isStudent(student){
student ? student ="student" : student = " not a student"
return student;
}
function displayMsg(age, weekEnd, student){
    let weekendVal =  isWeekend(weekEnd)
    let student1 = isStudent(student)
    return `my age is ${age} and it is ${weekendVal} im a ${student1}`
}
console.log(displayMsg(15,true, true))