const rollBtn = document.querySelector('.roll');
const restartBtn = document.querySelector('.restart');
const resultDiv = document.querySelector('.result');
const messageDiv = document.querySelector('.message');
const body = document.querySelector('body');

rollBtn.addEventListener('click', function () {
  const diceRoll = Math.floor(Math.random() * 6) + 1;
  resultDiv.textContent = 'You rolled: ' + diceRoll;

  if (diceRoll === 6) {
    messageDiv.textContent = ' You Win!';
    body.style.backgroundColor = 'orange';
  } else {
    messageDiv.textContent = 'Try Again';
  }
});

restartBtn.addEventListener('click', function () {
  resultDiv.textContent = '';
  messageDiv.textContent = '';
  messageDiv.className = 'message';
  body.style.backgroundColor = '';
});
