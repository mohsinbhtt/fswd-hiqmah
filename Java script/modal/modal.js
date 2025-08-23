const openBtn = document.querySelector('.open-modal');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close-modal');

openBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

document.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
