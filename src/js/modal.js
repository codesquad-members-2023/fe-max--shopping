import { $, $All, removeHiddenClass, addHiddenClassIfAbsent } from './utils/domUtils.js';
import { delay } from './utils/timeUtils.js';

const MODAL_OPEN_DELAY = 1000;

function initLoginModal() {
  document.addEventListener('DOMContentLoaded', () => delay(openLoginModal, MODAL_OPEN_DELAY));
  $('.login-container').addEventListener('mouseenter', openExpandedLoginModal);
  $('.login-container').addEventListener('mouseleave', closeAllLayers);
  $('.address-container').addEventListener('mouseenter', openAddressModal);
  $('.address-container').addEventListener('mouseleave', closeAllLayers);
}

function openLoginModal() {
  removeHiddenClass($('.modal-login'));
}

function openExpandedLoginModal() {
  removeHiddenClass($('.modal-login'));
  removeHiddenClass($('.modal-login__details'));
  removeHiddenClass($('.modal-cover'));
}

function openAddressModal() {
  removeHiddenClass($('.modal-address'));
  removeHiddenClass($('.modal-cover'));
}

async function closeAllLayers() {
  const layers = $All('.layer');
  for (const layer of layers) {
    addHiddenClassIfAbsent(layer);
  }
}

export { initLoginModal };
