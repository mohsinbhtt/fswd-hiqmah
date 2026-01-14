let questionOne = document.querySelector('#qns1');
let questionTwo = document.querySelector('#qns2');
let questionThree = document.querySelector('#qns3');
let questionFour = document.querySelector('#qns4');
let questionFive = document.querySelector('#qns5');

let answerOne = document.querySelector('#show-ans1');
let answerTwo = document.querySelector('#show-ans2');
let answerThree = document.querySelector('#show-ans3');
let answerFour = document.querySelector('#show-ans4');
let answerFive = document.querySelector('#show-ans5');

let closeCrossOne = document.querySelector('#closeBtn1');
let closeCrossTwo = document.querySelector('#closeBtn2');
let closeCrossThree = document.querySelector('#closeBtn3');
let closeCrossFour = document.querySelector('#closeBtn4');
let closeCrossFive = document.querySelector('#closeBtn5');

// let answerDisplay = document.querySelector('.answers');
let overlayLayer = document.querySelector('.overlay-layer');

questionOne.addEventListener('click', () => {
  console.log(' i also got clicked!');
  answerOne.style.display = 'flex';
  questionOne.style.zIndex = '20';
  overlayLayer.style.visibility = 'visible';
});
closeCrossOne.addEventListener('click', (e) => {
  e.stopPropagation();
  console.log('i got clicked');
  answerOne.style.display = 'none';
  overlayLayer.style.visibility = 'hidden';
});
questionTwo.addEventListener('click', () => {
  answerTwo.style.display = 'flex';
  questionTwo.style.zIndex = '20';
  overlayLayer.style.visibility = 'visible';
});
closeCrossTwo.addEventListener('click', () => {
  answerTwo.style.display = 'none';
  overlayLayer.style.visibility = 'hidden';
});
questionThree.addEventListener('click', () => {
  answerThree.style.display = 'flex';
  questionThree.style.zIndex = '20';
  overlayLayer.style.visibility = 'visible';
});
closeCrossThree.addEventListener('click', () => {
  answerThree.style.display = 'none';
  overlayLayer.style.visibility = 'hidden';
});
questionFour.addEventListener('click', () => {
  answerFour.style.display = 'flex';
  questionFour.style.zIndex = '20';
  overlayLayer.style.visibility = 'visible';
});
closeCrossFour.addEventListener('click', () => {
  answerFour.style.display = 'none';
  overlayLayer.style.visibility = 'hidden';
});
questionFive.addEventListener('click', () => {
  answerFive.style.display = 'flex';
  questionFive.style.zIndex = '20';
  overlayLayer.style.visibility = 'visible';
});
closeCrossFive.addEventListener('click', () => {
  answerFive.style.display = 'none';
  overlayLayer.style.visibility = 'hidden';
});
