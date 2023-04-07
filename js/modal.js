import { setEvent } from './utility.js';

const loginArea = document.querySelector('#nav-login');
const loginTextArea = document.querySelector('#nav-login-text');
const loginPopover = document.querySelector('#nav-login-popover');
const loginModal = document.querySelector('#nav-login-modal');
const backdrop = document.querySelector('.modal-backdrop');

export function initHeader() {
  setEvent(window, 'DOMContentLoaded', fadeInLoginPopover);
  setEvent(loginTextArea, 'mouseenter', showExpandedPopover);
  setEvent(loginArea, 'mouseleave', hideExpandedPopover);
}

function fadeInLoginPopover() {
  setTimeout(() => {
    loginPopover.show();
    loginPopover.classList.add('show');
  }, 1000);
}

function showExpandedPopover() {
  if (loginPopover) {
    loginPopover.close();
    loginPopover.classList.remove('show');
  }
  loginModal.show();
  loginModal.classList.add('show');
  backdrop.style.display = 'block';
  backdrop.classList.add('show');
}

function hideExpandedPopover() {
  loginModal.close();
  loginModal.classList.remove('show');
  backdrop.style.display = 'none';
  backdrop.classList.remove('show');
}
