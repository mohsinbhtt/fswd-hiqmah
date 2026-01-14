// scroll arrow//
const scrollBtn = document.querySelector('.scrollarrow');
window.addEventListener('scroll', function () {
	console.log('here');
	if (window.scrollY > 150) scrollBtn.classList.add('active');
	else if (window.scrollY <= 450)
		scrollBtn.classList.remove('active');
});
// darkmode toggle//
function toggle() {
	const menu = document.querySelector('.hamburger.lines');
	const links = document.querySelector('.hamburger.nav-links');
	menu.classList.toggle('clicked');
	links.classList.toggle('clicked');
}
// nav-links scroll//
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('.header a');
// console.log(links);
window.onscroll = () => {
	let y = window.scrollY;

	sections.forEach((sec) => {
		let secTop = sec.offsetTop;
		let height = sec.offsetHeight;
		let id = sec.getAttribute('id');

		if (y >= secTop && y < height + secTop) {
			navlinks.forEach((links) => {
				links.classList.remove('active');
			});

			let activeMenu = document.querySelectorAll(
				'.header a[href*=' + id + ']'
			);
			activeMenu.forEach((link) => link.classList.add('active'));
		}
	});
};
// typed-js
var typed = new Typed('#run-text', {
	strings: ['DEVELOPER', 'PROGRAMMER', 'CODER'],
	typeSpeed: 50,
	loop: true,
	backSpeed: 5,
	backdelay: 1000,
});
