import { createButtonEl } from './button.js';
import { addMouseoutHandler, addMouseoverHandler, createEmptyEl } from './loginModal.js';

const addressTabEl = document.querySelector('.nav-bar__main-address');
const addressModalEl = createAddressModal();

export function initAddressModal() {
  addressTabEl.append(addressModalEl);
  addMouseoverHandler(addressTabEl, 'modal-address', showAddressModal);
  addMouseoutHandler(addressTabEl);
}

function createAddressModal() {
  const modalEl = createEmptyEl('modal', 'modal-address');
  const descriptionEl = createDescriptionEl();
  const buttonsEl = createButtonsEl();

  modalEl.append(buttonsEl);
  modalEl.insertAdjacentHTML('afterbegin', descriptionEl);

  modalEl.style.display = 'none';

  return modalEl;
}

function createDescriptionEl() {
  return `<p>KR으로 배송할 품목을 표시하겠습니다. 다른 국가로 배송되는 품목을 보려면 배송 주소를 변경하십시오.</p>`;
}

function createButtonsEl() {
  const buttons = createEmptyEl('modal-address__buttons');
  const cancelBtnEl = createButtonEl('계속');
  const checkBtnEl = createButtonEl('주소 변경');

  buttons.append(cancelBtnEl, checkBtnEl);

  return buttons;
}

function showAddressModal() {
  const addressModalEl = document.querySelector('.modal-address');
  addressModalEl.style.display = 'flex';
}
