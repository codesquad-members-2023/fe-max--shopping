import { SearchLayer } from './SearchLayer.js';
import { $ } from '../../utils/domUtils.js';

export class SearchBar {
  constructor() {
    this.init();
    this.setEventHandlers();
  }

  init() {
    this.element = $('.search-bar');
    this.dropdown = new SearchLayer();
  }

  setEventHandlers() {
    this.element.addEventListener('focus', () => {
      this.dropdown.open();
    });
    this.element.addEventListener('blur', () => {
      this.dropdown.close();
    });
    this.element.addEventListener('keydown', (e) => {
      this.dropdown.navigateByArrowKey(e.key);
    });
  }
}
