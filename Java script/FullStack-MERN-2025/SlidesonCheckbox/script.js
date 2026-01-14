const prev = document.querySelector('.btn-pre');
const next = document.querySelector('.btn-nxt');
const slides = document.querySelectorAll('.slide');
const checkBox = document.querySelector('#checkbox');
const dotContainer = document.querySelector('.dot-container');
const btnContainer = document.querySelector('.btn');

let currSlide = 0;
const maxLength = slides.length - 1;

// dynamic html buttons
slides.forEach((_slide, i) => {
  const dotsHTML = `<button class="circle-dots" data-dots="${i}"></button>`;
  dotContainer.insertAdjacentHTML('beforeend', dotsHTML);
});
const dots = document.querySelectorAll('.circle-dots');

function activeDot(slide) {
  dots.forEach((d) => d.classList.remove('active-dot'));
  document
    .querySelector(`.circle-dots[data-dots="${slide}"]`)
    .classList.add('active-dot');
}
function GoToSlide(currSlide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - currSlide)}%)`)
  );
}
const prevSlide = function leftSlide() {
  if (currSlide <= 0) {
    currSlide = maxLength;
  } else {
    currSlide--;
  }
};
const nextSlide = function rightSlide() {
  if (currSlide >= maxLength) {
    currSlide = 0;
  } else {
    currSlide++;
  }
};

const slideIntervals = setInterval(() => {
  if (currSlide >= maxLength) {
    currSlide = 0;
  } else {
    currSlide++;
  }
  GoToSlide(currSlide);
  activeDot(currSlide);
}, 2000);

// first we check if checkbox is checked
if (checkBox.hasAttribute('checked')) {
  slideIntervals();
}
// if not checked
else {
  btnContainer.addEventListener('click', (e) => {
    if (e.target.closest('.prev')) {
      // console.log('prev is clicked');
      prevSlide();
    } else if (e.target.closest('.next')) {
      // console.log('next is clicked');
      nextSlide();
    }
    GoToSlide(currSlide);
    activeDot(currSlide);
  });
}

document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowLeft') {
    prevSlide();
  } else if (e.key === 'ArrowRight') {
    nextSlide();
  }
  GoToSlide(currSlide);
  activeDot(currSlide);
});

GoToSlide(0);
activeDot(0);

// else {
//   prev.addEventListener('click', () => changeSlide('prev'));
//   next.addEventListener('click', () => changeSlide('next'));

//   function changeSlide(selectedButton) {
//     if (selectedButton === 'prev') {
//       if (currSlide <= 0) {
//         currSlide = maxLength;
//       } else {
//         currSlide--;
//       }
//     } else if (selectedButton === 'next') {
//       if (currSlide >= maxLength) {
//         currSlide = 0;
//       } else {
//         currSlide++;
//       }
//     }
//   }
// }
