const mainImage = document.querySelector('#mainImage');

const thumb1 = document.querySelector('#thumb1');
const thumb2 = document.querySelector('#thumb2');
const thumb3 = document.querySelector('#thumb3');
const thumb4 = document.querySelector('#thumb4');

function selectThumbnail(thumb) {
  mainImage.src = thumb.src;
  thumb1.classList.remove('selected');
  thumb2.classList.remove('selected');
  thumb3.classList.remove('selected');
  thumb4.classList.remove('selected');
  thumb.classList.add('selected');
}
thumb1.addEventListener('click', function () {
  selectThumbnail(thumb1);
});
thumb2.addEventListener('click', function () {
  selectThumbnail(thumb2);
});
thumb3.addEventListener('click', function () {
  selectThumbnail(thumb3);
});
thumb4.addEventListener('click', function () {
  selectThumbnail(thumb4);
});
