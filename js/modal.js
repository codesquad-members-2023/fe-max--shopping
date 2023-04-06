const popover = document.querySelector('#nav-login-popover');
const closeBtn = document.querySelector('.close');

window.addEventListener('DOMContentLoaded', () => {
	setTimeout(() => {
		popover.show();
		popover.classList.toggle('show');
	}, 1000);
});

closeBtn.addEventListener('click', () => {
	popover.close();
	popover.classList.toggle('show');
});
