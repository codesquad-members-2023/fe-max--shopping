import { setEvent } from './utility.js';

const loginArea = document.querySelector('#nav-login');
const loginTextArea = document.querySelector('#nav-login-text');
const loginPopover = document.querySelector('#nav-login-popover');
const loginModal = document.querySelector('#nav-login-modal');
const addressArea = document.querySelector('#nav-shipping-address');
const addressModal = document.querySelector('#nav-address-modal');
const backdrop = document.querySelector('.modal__backdrop');

export function initHeader() {
  setEvent(window, 'DOMContentLoaded', fadeInLoginPopover);
  setEvent(loginTextArea, 'mouseenter', showLoginModal);
  setEvent(loginArea, 'mouseleave', hideLoginModal);
  setEvent(addressArea, 'mouseenter', showAddressModal);
  setEvent(addressArea, 'mouseleave', hideAddressModal);
}

function fadeInLoginPopover() {
  setTimeout(() => {
    loginPopover.classList.add('show');
  }, 1000);
}

function showLoginModal() {
  loginPopover.style.display = 'none';
  loginPopover.classList.remove('show');

  loginModal.classList.add('show');
  backdrop.classList.add('show');
}

function hideLoginModal() {
  loginModal.classList.remove('show');
  backdrop.classList.remove('show');
}

function showAddressModal() {
  addressModal.classList.add('show');
  backdrop.classList.add('show');
}

function hideAddressModal() {
  addressModal.classList.remove('show');
  backdrop.classList.remove('show');
}
