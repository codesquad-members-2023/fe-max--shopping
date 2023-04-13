import { searchbarSuggestEvent } from './searchbar/searchbar.js';

function init() {
  searchbarSuggestEvent();
}
window.addEventListener('DOMContentLoaded', init());
