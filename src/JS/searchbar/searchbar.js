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

export function inputMoveFocus() {
  const input = $('.searchbar__input');
  const suggest = $('.searchbar__suggest');
  input.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      suggest.lastElementChild.focus();
      keyDownMoveFocus();
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      suggest.firstElementChild.focus();
      keyDownMoveFocus();
    }
  });
}
function keyDownMoveFocus() {
  const focusElement = document.activeElement;
  focusElement.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (focusElement === $('.first')) {
        $('.searchbar__input').focus();
      } else {
        focusElement.previousElementSibling.focus();
        keyDownMoveFocus();
      }
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (focusElement === $('.last')) {
        $('.searchbar__input').focus();
      } else {
        focusElement.nextElementSibling.focus();
        keyDownMoveFocus();
      }
    }
  });
}
