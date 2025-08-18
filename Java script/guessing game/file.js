const secretNumber = Math.floor(Math.random() * 20) + 1;
let attempts = 0;

const guessInput = document.querySelector('.guess');
const checkBtn = document.querySelector('.check-btn');
const message = document.querySelector('.message');
const attemptsText = document.querySelector('.attempts');
const winDisplay = document.querySelector('.win');
checkBtn.addEventListener('click', function () {
  const userGuess = Number(guessInput.value);

  if (!userGuess || userGuess < 1 || userGuess > 20) {
    message.textContent = 'Please enter a number between 1 and 20.';
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
  } else if (isClose()) {
    message.textContent = 'you are close';
  } else if (userGuess < secretNumber) {
    message.textContent = 'Too low! Try again.';
  } else {
    message.textContent = 'Too high! Try again.';
  }
});
