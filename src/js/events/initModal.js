import { $ } from '../utils/dom.js';
import { delay } from '../utils/delay.js';
import { handleDimming, layerOpenState } from '../utils/dim.js';
import { TEMPLATE } from '../constants/templates.js';

const mainLogin = $('.main-login');
const mainShippingAddress = $('.main-shipping-address');

const setTime = 2000;

export async function initModal() {
  await delay(setTime);
  renderLoginModal();
  mainLogin.addEventListener('mouseenter', e => {
    modalRenderer('.modal', TEMPLATE.expandedLogin)();
  });
  mainLogin.addEventListener('mouseleave', e => {
    modalRemover('.modal')(e);
  });
  mainShippingAddress.addEventListener('mouseenter', e => {
    modalRenderer('.main-shipping-address', TEMPLATE.shippingModal)();
  });
  mainShippingAddress.addEventListener('mouseleave', e => {
    modalRemover('.modal-shipping')(e);
  });
}

function renderLoginModal() {
  mainLogin.insertAdjacentHTML('beforeend', TEMPLATE.loginModal);
}

function modalRenderer(modalSelector, modalTemplate) {
  return function () {
    layerOpenState.modal = true;
    handleDimming();

    const base = $(modalSelector);
    base.insertAdjacentHTML('beforeend', modalTemplate);
  };
}

function modalRemover(modalSelector) {
  return function (e) {
    layerOpenState.modal = false;
    handleDimming();

    const modal = $(modalSelector, e.target);
    modal.remove();
  };
}
