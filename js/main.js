import { initHeader } from './modal.js';
import { initSlider } from './slider.js';
import { Searchbar } from './Searchbar.js';
import { SearchbarLayer } from './SearchbarLayer.js';

function init() {
  initHeader();
  initSlider();
  new Searchbar(document.querySelector('.search-bar'));
  new SearchbarLayer(document.querySelector('.search-bar'));
}

init();
