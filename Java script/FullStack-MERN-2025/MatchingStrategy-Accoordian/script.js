const container = document.querySelector('.acc-container');
const para = document.querySelectorAll('.accordian');
const content = document.querySelectorAll('.content');

container.addEventListener('click', (e) => {
  const clickedLink = e.target.closest('.accordian');

  //   Guard clause
  if (!clickedLink) return;
  para.forEach((p) => p.classList.remove('active-acc'));
  content.forEach((c) => c.classList.remove('visible'));

  clickedLink.classList.add('active-acc');
  document
    .querySelector(`.content-${clickedLink.dataset.tab}`)
    .classList.add('visible');
});
// e.target.closest('.accordian');
// container.addEventListener(
//   'click',
//   container.forEach((e) => {
//     e.classlist.remove('.active-acc');
//   })
// );
