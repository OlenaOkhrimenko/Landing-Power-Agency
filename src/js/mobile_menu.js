let menuButton = document.querySelector('.menu_button');
let nav = document.querySelector('.nav');
let btn = document.querySelector('.btn_base.btn_base--primary');

menuButton.addEventListener('click', function () {
	nav.classList.toggle('active');
	btn.classList.toggle('active');
});