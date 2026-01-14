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
//   console.log('its a even number')
// }else{
//     console.log('odd number')
// }

// let age = prompt('enter your age');
// let isStudent = prompt('Are you a student').toLowerCase();
// let isWeekend = prompt('Is it a Weekend?').toLowerCase();

// console.log('week',isWeekend)
// console.log('student', isStudent)

// isStudent === 'yes' ? isStudent = true : isStudent =false

// isWeekend === 'yes' ? isWeekend = true : isWeekend= false

// console.log('is student', isStudent)
// console.log(' is weekend', isWeekend)

// let ticketPrice;

// if (age < 5) {
//   ticketPrice = 0;
// } else {

//   let standardPrice;
//   if (isWeekend) {
//     standardPrice = 300;
//   } else {
//     standardPrice = 200;
//   }

//   if (age >= 60) {

//     ticketPrice = standardPrice * 0.7;
//   } else if (isStudent && !isWeekend) {

//     ticketPrice = standardPrice * 0.5;
//   } else {

//     ticketPrice = standardPrice;
//   }
// }

// console.log("Final Ticket Price:", "₹" + ticketPrice);

// let grade = "c";
//          switch (grade) {
//              case "a":
//              console.log("Pass");
//              break;

//            case "b":
//             console.log("Average");
//              break;

//            case "c":
//              console.log("Nearly Fail");
//              break;

//            default:
//              console.log("Fail");
//              break;
//         }
//     function displayWelcomeMessage(boardingEmployee, gender) {

//     return(
//       `Welcome ${ gender == "M" ? "Mr" : "Miss" } ${boardingEmployee} on board, We are happy to join you`
//     );
//   }

//   console.log("Hi there");
//   let onBoardEmployee = "Mohsin";
//   let gender = "M";

//   let output=displayWelcomeMessage(onBoardEmployee, gender)

//  console.log (output)

// getFinalPrice -< cartAmount: Number, hasCoupon: Boolean, isFirstPurchase: boolean
// function getFinalPrice(cartAmount, hasCoupon, isFirstPurchase) {

//   let finalAmount = cartAmount;

//   if (typeof cartAmount != "number" || cartAmount < 0) {
//     return "Invalid cart amount";
//   }

//   if (cartAmount >= 500 && cartAmount <= 999) {
//     finalAmount -= cartAmount * 0.1; // 10%;

//   }
//   if (cartAmount >= 1000 && cartAmount <= 1999) {
//     finalAmount -= cartAmount * 0.15;
//   }
//   if (cartAmount >= 2000) {
//     finalAmount -= cartAmount * 0.25;
//   }

//   if (hasCoupon) {
//     finalAmount -= 100;
//   }

//   if (isFirstPurchase) {
//     finalAmount -= finalAmount * 0.05;
//   }

//   finalAmount += finalAmount * 0.18;

//   return finalAmount.toFixed(2);

// }
// console.log(getFinalPrice(600, false, false));
// console.log(getFinalPrice(1100, true, true));
// console.log(getFinalPrice(2400, true, false));
// console.log(getFinalPrice(300, true, true));
// console.log(getFinalPrice(-100, false, false));
