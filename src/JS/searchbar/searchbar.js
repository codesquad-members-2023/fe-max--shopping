import { $, $All, dim, dimOff, showLayer, hideLayer } from '../utils.js';

export function searchbarSuggestEvent() {
  const searchBarInput = $('.searchbar__input');
  inputFocusEvent();
  inputBlurEvent();
}

function inputFocusEvent() {
  const searchBarInput = $('.searchbar__input');
  searchBarInput.addEventListener('focus', function (e) {
    showLayer('.searchbar__suggest');
    dim('main');
  });
}
function inputBlurEvent() {
  const searchBarInput = $('.searchbar__input');
  searchBarInput.addEventListener('blur', function (e) {
    hideLayer('.searchbar__suggest');
    dimOff('main');
  });
}
