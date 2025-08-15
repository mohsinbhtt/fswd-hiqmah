// let balance = 5000;
// const correctPin = 1234;

// function validatePin(inputPin) {
//     return Number(inputPin) === correctPin;
// }
// const validatePin = (inputPin) => Number(inputPin) === correctPin;

// function checkBalance(balance) {
//   alert(`Your current balance is ₹${balance}`);
//   showMenu();
// }

// function deposit(balance, amount) {
//   if (amount > 0) {
//     balance += amount;
//     alert(`Deposit successful! Your current balance is ₹${balance}`);
//   } else {
//     alert("Invalid deposit amount.");
//   }
//   showMenu();
//   return balance;
// }

// function withdraw(balance, amount) {
//   if (amount <= 0) {
//     alert("Invalid withdrawal amount.");
//   } else if (amount > balance) {
//     alert("Insufficient funds.");
//   } else {
//     balance -= amount;
//     alert(`Withdrawal successful! Your current balance is ₹${balance}`);
//   }
//   showMenu();
//   return balance;
// }

// function showMenu() {
//   let option = prompt(
//     "Select an option:\n1. Check Balance \n2. Deposit \n3. Withdraw \n4. Exit"
//   );

//   if (option === "1") {
//     checkBalance(balance);
//   } else if (option === "2") {
//     let depositAmount = Number(prompt("Enter amount to deposit:"));
//     balance = deposit(balance, depositAmount);
//   } else if (option === "3") {
//     let withdrawAmount = Number(prompt("Enter amount to withdraw:"));
//     balance = withdraw(balance, withdrawAmount);
//   } else if (option === "4") {
//     alert("Thank you for using the ATM. Goodbye!");
//     return;
//   } else {
//     alert("Invalid option.");
//     showMenu();
//   }
// }

// const pinInterface = () =>  prompt("Enter pin")

// function atmInterface(pin) {
//   if (!validatePin(pin)) {
//     alert("Invalid PIN. Access denied.");
//     atmInterface(pinInterface());
//   }

//   alert("Welcome to the ATM!");
//   showMenu();
// }

// let pin = pinInterface()
// atmInterface(pin);

//  const currentYear = 2025

//  const ages = []

// const birthYears = [1995,1996,1997,1998,1999]

// for(i=0;  i < birthYears.length ; i++ ){
//  ages.push (currentYear-birthYears[i])
// }
// console.log(ages)

//TODO:
//FIXME:
//BUG:
const library = [
  {
    title: 'The Silent Sea',
    author: 'Clive Cus',
    year: 2010,
    available: true,
  },
  {
    title: 'Project Hail Mary',
    author: 'Andy Weir',
    year: 2021,
    available: true,
  },
  {
    title: 'The Martian',
    author: 'Andy Weir',
    year: 2014,
    available: false,
  },

  {
    title: 'Becoming',
    author: 'Michelle Obama',
    year: 2018,
    available: true,
  },

  {
    title: 'Educated',
    author: 'Tara West',
    year: 2018,
    available: true,
  },
];

console.log('📚 Initial Library:', library);

library.push({
  title: 'Atomic Habits',
  author: 'James Clear',
  year: 2018,
  available: true,
});
console.log('\n✅ After Adding a Book:', library);

for (i = 0; i <= 5; i++) {
  if (library[i].available !== true) {
    continue;
  }
}
