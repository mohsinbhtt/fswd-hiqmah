const overLayer = document.querySelector('.overlay');
const container = document.querySelector('.container');

function display(id) {
  document.getElementById(id).classList.add('display');
  document.getElementById(id).style.zIndex = '20';
  // container.style.zIndex = '-2';
  overLayer.style.zIndex = '1';
}

function hide(id) {
  document.getElementById(id).classList.remove('display');
  // document.getElementById(id).style.zIndex = '1';
  // container.style.zIndex = '1';
  // overLayer.style.zIndex = '-1';
}
