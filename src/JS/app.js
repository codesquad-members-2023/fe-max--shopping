import { inputAutocomplete } from './searchbar/autocomplete.js';
import { searchbarInputInit } from './searchbar/searchbar.js';

function init() {
  searchbarInputInit();
  inputAutocomplete();
}
window.addEventListener('DOMContentLoaded', init());
