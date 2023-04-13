import {
  focusInputShowAndHideLayer,
  inputMoveFocus,
} from './searchbar/searchbar.js';

function init() {
  focusInputShowAndHideLayer();
  inputMoveFocus();
}
window.addEventListener('DOMContentLoaded', init());
