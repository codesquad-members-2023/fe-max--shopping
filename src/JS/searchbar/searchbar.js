import {
  $,
  $All,
  selectEventShowLayer,
  selectEventHideLayer,
} from '../utils.js';

export function focusInputShowAndHideLayer() {
  selectEventShowLayer('.searchbar__input', 'focus', '.searchbar__suggest');
  selectEventHideLayer('click', '.searchbar__suggest');
}

export function moveFocusInput() {
  const input = $('.searchbar__input');
  const suggestEl = $('.searchbar__suggest');
  input.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      suggestEl.lastElementChild.focus();
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      suggestEl.firstElementChild.focus();
    }
    moveFocusOnkeyDown();
  });
}
function moveFocusOnkeyDown() {
  const focusEl = document.activeElement;
  const input = $('.searchbar__input');
  const suggestEl = $('.searchbar__suggest');
  const firstEl = suggestEl.firstElementChild;
  const lastEl = suggestEl.lastElementChild;
  focusEl.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (focusEl === firstEl) {
        input.focus();
      } else {
        focusEl.previousElementSibling.focus();
        moveFocusOnkeyDown();
      }
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (focusEl === lastEl) {
        input.focus();
      } else {
        focusEl.nextElementSibling.focus();
        moveFocusOnkeyDown();
      }
    }
  });
}
