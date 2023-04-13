import { $, $All, removeHiddenClass, addHiddenClassIfAbsent } from '../utils/domUtils.js';
import { delay } from '../utils/timeUtils.js';

const MODAL_OPEN_DELAY = 1000;

function openLoginModal() {
  closeAllLayers();
  removeHiddenClass($('.modal-login'));
}

function openExpandedLoginModal() {
  closeAllLayers();
  removeHiddenClass($('.modal-login'));
  removeHiddenClass($('.modal-login__details'));
  openDimmedLayer();
}

function openAddressModal() {
  closeAllLayers();
  removeHiddenClass($('.modal-address'));
  openDimmedLayer();
}

async function isLayerOpened() {
  const layers = $All('.layer');
  // return [...layers].some((layer) => {
  //   !layer.classList.contains('hidden')});
  for (const layer of layers) {
    const hasHidden = await layer.classList.contains('hidden'); 
    if (!hasHidden) {
      return true;
    }
  }
  return false;
}

export function openDimmedLayer() {
  removeHiddenClass($('.dimmed-layer'));
}

export function closeAllLayers() {
  const layers = $All('.layer');
  for (const layer of layers) {
    addHiddenClassIfAbsent(layer);
  }
}

export function initLoginModal() {
  document.addEventListener('DOMContentLoaded', async () => {
    if (await isLayerOpened()) {
      return;
    }
    delay(openLoginModal, MODAL_OPEN_DELAY)
  });
  $('.login-container').addEventListener('mouseenter', openExpandedLoginModal);
  $('.nav-bar__login').addEventListener('mouseleave', closeAllLayers);
  $('.address-container').addEventListener('mouseenter', openAddressModal);
  $('.nav-bar__address').addEventListener('mouseleave', closeAllLayers);
}