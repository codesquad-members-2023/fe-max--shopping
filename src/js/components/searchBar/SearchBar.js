import { SearchLayer } from './SearchLayer.js';
import { $ } from '../../utils/domUtils.js';

export class SearchBar {
  constructor() {
    this.init();
    this.setEventHandlers();
  }

  init() {
    this.element = $('.search-bar');
    this.SearchLayer = new SearchLayer();
  }

  setEventHandlers() {
    this.element.addEventListener('focus', () => {
      this.SearchLayer.open();
    });
    this.element.addEventListener('blur', () => {
      this.SearchLayer.close();
    });
    this.element.addEventListener('keydown', (e) => {
      this.SearchLayer.navigateByArrowKey(e.key);
    });
  }
}
