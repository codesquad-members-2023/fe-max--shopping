const navLogin = document.querySelector('#nav-login');
const loginTextArea = document.querySelector('#nav-login-wrapper');
const popover = document.querySelector('#nav-login-popover');
const expandedPopover = document.querySelector('#nav-login-popover-expanded');

const backdrop = document.createElement('div');
backdrop.classList.add('modal-backdrop');
navLogin.parentNode.appendChild(backdrop);

window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    popover.show();
    popover.classList.add('show');
  }, 1000);
});

loginTextArea.addEventListener('mouseenter', () => {
  popover.close();
  popover.classList.remove('show');

  expandedPopover.show();
  expandedPopover.classList.add('show');
  backdrop.style.display = 'block';
  backdrop.classList.add('show');
});

// navLogin.addEventListener('mouseout', () => {
//   expandedPopover.close();
//   expandedPopover.classList.remove('show');
//   backdrop.style.display = 'none';
//   backdrop.classList.remove('show');
// });

expandedPopover.addEventListener('mouseleave', () => {
  expandedPopover.close();
  expandedPopover.classList.remove('show');
  backdrop.style.display = 'none';
  backdrop.classList.remove('show');
});
