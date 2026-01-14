const buttons = document.querySelectorAll('.btn');
const nav = document.querySelector('.nav-list');

nav.addEventListener('click', (e) => {
  //   console.log('target:', e.target);
  //   console.log('currentTarget:', e.currentTarget);

  //   matching strategy:
  if (e.target.closest('.spn')) {
    e.target.style.background = 'red';
    console.log('button clicked');
  }
});
// buttons.forEach((button) => {
//   button.addEventListener('click', (e) => {
//     button.style.backgroundColor = 'green';
//     console.log('target:', e.target);
//     console.log('currentTarget:', e.currentTarget);
//   });
// });
