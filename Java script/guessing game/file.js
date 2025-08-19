let secretNumber = null;
let attempts = 0;

const guessInput = document.querySelector('.guess');
const checkBtn = document.querySelector('.check-btn');
const message = document.querySelector('.message');
const attemptsText = document.querySelector('.attempts');
const winDisplay = document.querySelector('.win');
const body = document.querySelector('body');
const resetBtn = document.querySelector('.reset-btn');
const easy = document.querySelector('#option1');
const medium = document.querySelector('#option2');
const hard = document.querySelector('#option3');

easy.addEventListener('change', function () {
  message.textContent = 'Guess a number between 1 and 20';
  secretNumber = null;
});

medium.addEventListener('change', function () {
  message.textContent = 'Guess a number between 1 and 50';
  secretNumber = null;
});

hard.addEventListener('change', function () {
  message.textContent = 'Guess a number between 1 and 100';
  secretNumber = null;
});

function generateSecretNumber() {
  if (easy.checked) {
    return Math.floor(Math.random() * 20) + 1;
  } else if (medium.checked) {
    return Math.floor(Math.random() * 50) + 1;
  } else if (hard.checked) {
    return Math.floor(Math.random() * 100) + 1;
  } else {
    message.textContent = 'Please select a difficulty first';
    return null;
  }
}

checkBtn.addEventListener('click', function () {
  if (secretNumber === null) {
    secretNumber = generateSecretNumber();
    if (secretNumber === null) return;
  }
  const userGuess = Number(guessInput.value);

  if (!userGuess || userGuess < 1) {
    message.textContent = 'Please enter a valid number.';
    return;
  }

  attempts++;
  attemptsText.textContent = `Attempts: ${attempts}`;
  function isClose() {
    return Math.abs(secretNumber - userGuess) <= 2;
  }
  // console.log(isClose());

  if (userGuess === secretNumber) {
    message.textContent = ` Correct! The number was ${secretNumber}.`;
    winDisplay.style.display = 'block';
    body.style.backgroundColor = 'orange';
  } else if (isClose()) {
    message.textContent = 'you are close';
  } else if (userGuess < secretNumber) {
    message.textContent = 'Too low! Try again.';
  } else {
    message.textContent = 'Too high! Try again.';
  }
});
resetBtn.addEventListener('click', function () {
  attemptsText.textContent = `Attempts: ${(attempts = 0)}`;
  message.textContent = '';
  guessInput.value = '';
  body.style.backgroundColor = '';
  winDisplay.style.display = 'none';
  easy.checked = 'false';
  medium.checked = 'false';
  hard.checked = 'false';
  secretNumber = null;
});
