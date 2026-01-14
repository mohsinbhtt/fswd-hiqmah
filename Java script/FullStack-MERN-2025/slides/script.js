const prev = document.querySelector('.btn-pre');
const next = document.querySelector('.btn-nxt');
const slides = document.querySelectorAll('.slide');
// console.log(slides);

let currSlide = 0;

const maxLength = slides.length - 1;

// function GoToPrevSlide() {
//   if (currSlide <= 0) {
//     currSlide = maxLength;
//   } else {
//     currSlide--;
//   }
//   slides.forEach(
//     (s, i = 1) => (s.style.transform = `translateX(${100 * (i - currSlide)}%)`)
//   );
// }
// function GoToNextSlide() {
//   if (currSlide >= maxLength) {
//     currSlide = 0;
//   } else {
//     currSlide++;
//   }
//   slides.forEach(
//     (s, i) => (s.style.transform = `translateX(${100 * (i - currSlide)}%)`)
//   );
// }

prev.addEventListener('click', () => changeSlide('prev'));
next.addEventListener('click', () => changeSlide('next'));

function changeSlide(selectedButton) {
  if (selectedButton === 'prev') {
    if (currSlide <= 0) {
      currSlide = maxLength;
    } else {
      currSlide--;
    }
  } else if (selectedButton === 'next') {
    if (currSlide >= maxLength) {
      currSlide = 0;
    } else {
      currSlide++;
    }
  }
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - currSlide)}%)`)
  );
}
