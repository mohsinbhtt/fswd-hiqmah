
// let age = 28;
// let weight = 68;  
// let height = 1.72; 


// let bmi= weight / (height * height);
// console.log(bmi)

// if (bmi < 18) {
//   console.log('under weight');
// } else {
//   if (bmi < 40) {
//     console.log('need to improve')
//   } else {
//     if (bmi <70) {
//       console.log('over weight');
//     } else {
//       console.log('too weak')
//     }
//   }
// }
// let input1 = prompt('enter a number')
// if(Number (input1) %2 === 0){
//   console.log('its a even numbr')
// }else{
//     console.log('odd number')
// }


let age = 65;
let isStudent = false;
let isWeekend = true;

let ticketPrice;

if (age < 5) {
  ticketPrice = 0;
} else { 
  
  let standardPrice;
  if (isWeekend) {
    standardPrice = 300;
  } else {
    standardPrice = 200;
  }

  
  if (age >= 60) {

    ticketPrice = standardPrice * 0.7;
  } else if (isStudent && !isWeekend) {
   
    ticketPrice = standardPrice * 0.5;
  } else {
   
    ticketPrice = standardPrice;
  }
}


console.log("Final Ticket Price:", "₹" + ticketPrice);


let grade = "c";
        switch (grade) {
            case "a":
            console.log("Pass");
            break;

          case "b":
            console.log("Average");
            break;

          case "c":
            console.log("Nearly Fail");
            break;

          default:
            console.log("Fail");
            break;
        }
         