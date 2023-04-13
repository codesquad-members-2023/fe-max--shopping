import { SearchLayer } from './SearchLayer.js';
import { $ } from '../../utils/domUtils.js';

export class SearchBar {
  constructor(dataManager) {
    this.init(dataManager);
    this.setEventHandlers();
  }
  
  init(dataManager) {
    this.element = $('.search-bar');
    this.dropdown = new SearchLayer(dataManager);
  }

  setEventHandlers() {
    this.element.addEventListener('focus', () => {
      this.dropdown.open();
    })
    this.element.addEventListener('blur', () => {
      this.dropdown.close();
    })
  }
}