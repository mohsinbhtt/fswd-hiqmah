let mainImage = document.querySelector('.main-image')
let imageOne = document.querySelector('#image-one')
let imageTWo = document.querySelector('#image-two')
let imageThree = document.querySelector('#image-three')
let imageFour = document.querySelector('#image-four')

imageOne.addEventListener('click', () => {
    mainImage.style.backgroundImage = "url('./images/burak-babayigit-SQFclH9qqTs-unsplash.jpg')"
})

imageTWo.addEventListener('click', ()=> {
    mainImage.style.backgroundImage = "url('./images/eiliv-aceron-M-pEl_nv1Q0-unsplash.jpg')"
})

imageThree.addEventListener('click', ()=> {
    mainImage.style.backgroundImage = "url('./images/fatima-akram-uU0Anw-8Vsg-unsplash.jpg')"
})

imageFour.addEventListener('click', ()=> {
    mainImage.style.backgroundImage = "url('./images/shreyak-singh-0j4bisyPo3M-unsplash.jpg')"
})