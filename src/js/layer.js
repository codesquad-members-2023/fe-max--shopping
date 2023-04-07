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
  if (e.relatedTarget !== modal && !isOpenAddresslayer && !isOpenLoginExpandLayer) {
    modal.classList.add('hidden');
    dimBackground.classList.add('hidden');
  }
}

function addMouseEvents(area, layer, handleMouseEnter, handleMouseLeave) {
  area.addEventListener('mouseenter', handleMouseEnter);
  layer.addEventListener('mouseenter', handleMouseEnter);
  area.addEventListener('mouseleave', handleMouseLeave);
  layer.addEventListener('mouseleave', handleMouseLeave);
}

function initNavLayer() {
  renderLoginLayer();
  addMouseEvents(addressArea, addressLayer, handleAddressMouseEnter, handleAddressMouseLeave);
  addMouseEvents(addressLayer, addressArea, handleAddressMouseEnter, handleAddressMouseLeave);
  addMouseEvents(loginArea, loginExpandLayer, handleLoginMouseEnter, handleLoginMouseLeave);
  addMouseEvents(loginExpandLayer, loginArea, handleLoginMouseEnter, handleLoginMouseLeave);
}

initNavLayer();
