import { toggleSuggestLayer, moveFocusSuggest } from './searchbar/searchbar.js';

function init() {
  toggleSuggestLayer();
  moveFocusSuggest();
}
window.addEventListener('DOMContentLoaded', init());
