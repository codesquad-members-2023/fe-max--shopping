import { $, $All, showHiddenElement, closeAllLayers, openLayer } from '../utils/domUtils.js';

const MODAL_OPEN_DELAY = 1000;

async function openLoginModal() {
  if (await isLayerOpened()) {
    return;
  }
  closeAllLayers();
  showHiddenElement($('.modal-login'));
}

async function openLoginModalWithDelay() {
  setTimeout(openLoginModal, MODAL_OPEN_DELAY);
}

function openExpandedLoginModal() {
  openLayer($('.modal-login'), $('.modal-login__details'));
}

function openAddressModal() {
  openLayer($('.modal-address'));
}

async function isLayerOpened() {
  const layers = $All('.layer');
  for (const layer of layers) {
    const hasHidden = await layer.classList.contains('hidden');
    if (!hasHidden) {
      return true;
    }
  }
  return false;
}

export function initLoginModal() {
  document.addEventListener('DOMContentLoaded', openLoginModalWithDelay);
  $('.login-container').addEventListener('mouseenter', openExpandedLoginModal);
  $('.nav-bar__login').addEventListener('mouseleave', closeAllLayers);
  $('.address-container').addEventListener('mouseenter', openAddressModal);
  $('.nav-bar__address').addEventListener('mouseleave', closeAllLayers);
}
