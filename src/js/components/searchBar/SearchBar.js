import { SearchLayer } from './SearchLayer.js';
import { $ } from '../../utils/domUtils.js';

export class SearchBar {
  constructor() {
    this.init();
    this.initEventHandlers();
  }
  
  init() {
    this.element = $('.search-bar');
    this.dropdown = new SearchLayer();
  }

  initEventHandlers() {
    this.element.addEventListener('focus', () => {
      this.dropdown.open();
    })
  }
}