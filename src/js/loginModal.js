import { createButtonEl } from './button.js';

const navBarEl = document.querySelector('#nav-bar');
const navLoginTabEl = document.querySelector('.nav-bar__main-login');
const loginModalEl = createLoginModalEl();

export function initLoginModal() {
  document.addEventListener('DOMContentLoaded', () => {
    addLoginModal();
    addModalCover();
    addMouseoverHandler(navLoginTabEl, 'modal-login', showLoginModal);
    addMouseoutHandler(navLoginTabEl);
  });
}

function addLoginModal() {
  navLoginTabEl.append(loginModalEl);
}

function createLoginModalEl() {
  const modalEl = createEmptyEl('modal', 'modal-login');
  const btnEl = createButtonEl('로그인');
  const captionEl = createCaptionEl();
  const detailsEl = createDetailsEl();

  modalEl.append(btnEl, detailsEl);
  btnEl.insertAdjacentHTML('afterend', captionEl);

  modalEl.style.animationDelay = '1s';

  return modalEl;
}

export function createEmptyEl(...classNames) {
  const el = document.createElement('div');
  el.classList.add(...classNames);

  return el;
}

function createCaptionEl() {
  return `<span>기존 사용자가 아니십니까?<a href="">여기에서 시작합니다</a></span>`;
}

function createDetailsEl() {
  const detailsEl = document.createElement('div');
  const inventoryListEl = createInventoryListEl();
  const accountItemListEl = createAccountItemListEl();

  detailsEl.className = 'modal-login__details';
  detailsEl.style.display = 'none';
  detailsEl.append(inventoryListEl, accountItemListEl);

  return detailsEl;
}

function createInventoryListEl() {
  const inventoryList = {
    title: '귀하의 목록',
    items: ['목록 생성', '목록 또는 레지스트리 찾기', 'AmazonSmile 자선 품목 목록'],
  };

  return createListWithTitle(inventoryList);
}

function createAccountItemListEl() {
  const accountItemList = {
    title: '계정',
    items: [
      '계정',
      '주문',
      '권장 사항',
      '검색 기록',
      '위치리스트',
      '비디오 구매 및 대여',
      'Kindle 언리미티드',
      '콘텐츠 및 기기',
      '항목 구독 및 저장',
      '멤버십 및 구독',
      '음악 라이브러리',
    ],
  };

  return createListWithTitle(accountItemList);
}

function createListWithTitle(info) {
  const sectionEl = document.createElement('section');
  const titleEl = document.createElement('h2');
  const listEl = document.createElement('ul');

  titleEl.textContent = info.title;
  for (const item of info.items) {
    const itemEl = document.createElement('li');
    itemEl.textContent = item;
    listEl.appendChild(itemEl);
  }
  sectionEl.append(titleEl, listEl);

  return sectionEl;
}

export function addMouseoverHandler(targetEl, className, showTargetEl) {
  targetEl.addEventListener('mouseover', (e) => {
    if (e.target.className === className || e.target.closest(`.${className}`)) return;

    showTargetEl();
    showModalCover();
  });
}

function showLoginModal() {
  const loginModalEl = document.querySelector('.modal-login');
  loginModalEl.style.animationDelay = '';
  loginModalEl.style.display = 'flex';

  showLoginModalDetails();
}

function showLoginModalDetails() {
  const loginModalDetailsEl = document.querySelector('.modal-login__details');
  loginModalDetailsEl.style.display = 'flex';
}

function addModalCover() {
  const modalCoverEl = document.createElement('div');
  modalCoverEl.className = 'modal-cover';
  modalCoverEl.style.display = 'none';
  navBarEl.append(modalCoverEl);
}

export function showModalCover() {
  const modalCoverEl = document.querySelector('.modal-cover');
  modalCoverEl.style.display = 'block';
}

export function addMouseoutHandler(targetEl) {
  targetEl.addEventListener('mouseleave', () => {
    hideModals();
    hideModalCover();
  });
}

function hideModals() {
  const modals = findAllModals();
  modals.forEach((modal) => hideByFadeout(modal));
}

function findAllModals() {
  return document.querySelectorAll('.modal');
}

function hideModalCover() {
  const modalCoverEl = document.querySelector('.modal-cover');
  hideByFadeout(modalCoverEl);
}

async function hideByFadeout(el) {
  el.style.animation = 'fade-out 0.5s forwards';
  await delay(500);
  el.style.display = 'none';
  el.style.animation = '';
}

function delay(ms) {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(resolve, ms);
    } catch (error) {
      reject(error);
    }
  });
}
