const loginArea = document.querySelector('.header__login');
const loginLayer = document.querySelector('.header-layer__popup--login');
const loginExpandLayer = document.querySelector('.header-layer__popup--login-extend');
const addressArea = document.querySelector('.header__shipping-address');
const addressLayer = document.querySelector('.header-layer__popup--address');
const dimBackground = document.querySelector('.dim');

let isOpenAddresslayer = false;
let isOpenLoginExpandLayer = false;

function renderLoginLayer() {
  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
      loginLayer.classList.remove('hidden');
    }, 1000);
  });
}

function handleAddressMouseEnter() {
  if (!isOpenAddresslayer) openLayer(addressLayer);
  isOpenAddresslayer = true;
}

function handleLoginMouseEnter() {
  loginLayer.classList.add('hidden');
  if (!isOpenAddresslayer) openLayer(loginExpandLayer);
  isOpenLoginExpandLayer = true;
}

function handleAddressMouseLeave(e) {
  isOpenAddresslayer = false;
  closeLayer(addressLayer, e);
}

function handleLoginMouseLeave(e) {
  isOpenLoginExpandLayer = false;
  closeLayer(loginExpandLayer, e);
}

function openLayer(modal) {
  modal.classList.remove('hidden');
  dimBackground.classList.remove('hidden');
}

function closeLayer(modal, e) {
  if (isOpenAddresslayer || isOpenLoginExpandLayer || e.relatedTarget === modal) {
    return;
  }

  modal.classList.add('hidden');
  dimBackground.classList.add('hidden');
}

function initNavLayer() {
  renderLoginLayer();
  addressArea.addEventListener('mouseenter', handleAddressMouseEnter);
  addressArea.addEventListener('mouseleave', handleAddressMouseLeave);
  addressLayer.addEventListener('mouseenter', handleAddressMouseEnter);
  addressLayer.addEventListener('mouseleave', handleAddressMouseLeave);
  loginArea.addEventListener('mouseenter', handleLoginMouseEnter);
  loginExpandLayer.addEventListener('mouseleave', handleLoginMouseLeave);
}

initNavLayer();
