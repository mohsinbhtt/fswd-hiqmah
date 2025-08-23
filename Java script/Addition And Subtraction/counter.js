const value = document.querySelector('#value');
const increaseBtn = document.querySelector('#increase');
const decreaseBtn = document.querySelector('#decrease');
let count = 0;
function updateCount() {
  value.textContent = count;
  value.style.color = count > 0 ? 'green' : 'red';
}
increaseBtn.addEventListener('click', function () {
  count++;
  updateCount();
});
decreaseBtn.addEventListener('click', function () {
  if (count > 0) {
    count--;
    updateCount();
  }
});
