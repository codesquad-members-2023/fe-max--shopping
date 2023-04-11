import { $, $All } from '../utils/dom.js';
import { handleDimming, modalState } from '../utils/dim.js';
const mainSearchBarArea = document.querySelector('.main-search-bar');
const searchBar = document.searchForm.searchBar;
const searchLayer = document.querySelector('.search-layer');
const firstLi = searchLayer.firstElementChild;
const lastLi = searchLayer.lastElementChild;
const esc = 27;

export function initSearchBar() {
  mainSearchBarArea.addEventListener('click', handleModal);
  document.addEventListener('click', removeModal);
  searchBar.addEventListener('keydown', keyboardNavigationHandler);
  searchLayer.addEventListener('keydown', addFocus);
}

function handleModal() {
  modalState.searchModal = true;
  searchLayer.classList.remove('hidden');
  handleDimming();
}

function removeModal(e) {
  if (!e.target.closest('.main-search-bar') || e.keyCode === esc) {
    modalState.searchModal = false;
    handleDimming();
    searchLayer.classList.add('hidden');
  }
}

function keyboardNavigationHandler(e) {
  if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
    e.preventDefault();
  }
  if (e.key === 'ArrowDown') {
    firstLi.focus();
  }
  if (e.key === 'ArrowUp') {
    lastLi.focus();
  }
  if (e.keyCode === esc) {
    removeModal(e);
  }
}
function addFocus(e) {
  let onFocus = document.activeElement;
  if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp' && e.keyCode !== esc) {
    console.log('Press Up or Down');
    return;
  } else if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
    e.preventDefault();
  }

  if (e.key === 'ArrowDown') {
    if (onFocus === lastLi) {
      onFocus = searchBar.focus();
    } else {
      onFocus = onFocus.nextElementSibling.focus();
    }
  }
  if (e.key === 'ArrowUp') {
    if (onFocus === firstLi) {
      onFocus = searchBar.focus();
    } else {
      onFocus = onFocus.previousElementSibling.focus();
    }
  }
  if (e.keyCode === esc) {
    removeModal(e);
  }
}
