const users = [
  { name: 'john', password: '1234' },
  { name: 'alice', password: 'password' },
];
const [user1, user2] = users;
// console.log(user1);
// console.log(user2);
const userName = document.querySelector('#username');
const userPassword = document.querySelector('#password');

const userAlert = document.querySelector('.userNotFound');
const passwordAlert = document.querySelector('.Incorrect-password');
const hideContainer = document.querySelector('.container');
const welcomeText = document.querySelector('.welcome-text');

// function welcome() {
//   if (
//     user1.name === userNameVal &&
//     user1.password === userPasswordVal
//   ) {
//     console.log('u r welcome');
//   } else {
//     console.log('not a user');
//   }
// }
function welcome() {
  const userNameVal = userName.value.trim();
  const userPasswordVal = userPassword.value.trim();
  const userExit = users.find((u) => u.name === userNameVal);
  if (!userExit) {
    userAlert.style.display = 'flex';
  } else if (userExit.password !== userPasswordVal) {
    passwordAlert.style.display = 'flex';
  } else {
    hideContainer.style.display = 'none';
    welcomeText.style.display = 'flex';
  }
}
//FIXME: Welcome text not visible
