import {
  focusInputShowAndHideLayer,
  moveFocusInput,
} from './searchbar/searchbar.js';

function init() {
  focusInputShowAndHideLayer();
  moveFocusInput();
}
window.addEventListener('DOMContentLoaded', init());
