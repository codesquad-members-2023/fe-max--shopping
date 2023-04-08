import { setEvent } from './utility.js';

const loginArea = document.querySelector('#nav-login');
const loginTextArea = document.querySelector('#nav-login-text');
const loginPopover = document.querySelector('#nav-login-popover');
const loginModal = document.querySelector('#nav-login-modal');
const backdrop = document.querySelector('.modal-backdrop');

export function initHeader() {
  setEvent(window, 'DOMContentLoaded', fadeInLoginPopover);
  setEvent(loginTextArea, 'mouseenter', showLoginModal);
  setEvent(loginArea, 'mouseleave', hideLoginModal);
}

function fadeInLoginPopover() {
  setTimeout(() => {
    loginPopover.show();
    loginPopover.classList.add('show');
  }, 1000);
}

function showLoginModal() {
  if (loginPopover) {
    loginPopover.close();
    loginPopover.classList.remove('show');
  }
  loginModal.show();
  loginModal.style.display = 'flex';
  loginModal.classList.add('show');
  backdrop.style.display = 'block';
  backdrop.classList.add('show');
}

function hideLoginModal() {
  loginModal.close();
  loginModal.style.display = 'none';
  loginModal.classList.remove('show');
  backdrop.style.display = 'none';
  backdrop.classList.remove('show');
}
