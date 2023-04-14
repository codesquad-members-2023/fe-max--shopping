import { $, removeHiddenClass } from '../../utils/domUtils.js';
import { closeAllLayers, openDimmedLayer } from '../modal.js';
import { SearchSuggestion } from './SearchSuggestion.js';

export class SearchLayer {
  constructor() {
    this.init();
  }

  init() {
    this.element = $('.search-layer');
    this.suggestion = new SearchSuggestion();
  }

  async open() {
    await this.suggestion.setSuggestion();

    closeAllLayers();
    openDimmedLayer();
    removeHiddenClass(this.element);
  }

  close() {
    closeAllLayers();
    this.suggestion.emptyResults();
  }

  navigateByArrowKey(key) {
    if (key === 'ArrowUp') {
      this.suggestion.moveToAboveSuggestion()
      return;
    }
    if (key === 'ArrowDown') {
      this.suggestion.moveToBelowSuggestion()
      return;
    }
  }
}
