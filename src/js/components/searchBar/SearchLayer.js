import { $, removeHiddenClass } from '../../utils/domUtils.js';
import { closeAllLayers, openDimmedLayer } from '../modal.js';
import { SearchResultList } from './SearchResultList.js';

export class SearchLayer {
  constructor() {
    this.init();
  }

  init() {
    this.element = $('.search-layer');
    this.resultList = new SearchResultList();
  }

  async open() {
    await this.resultList.setDefaultResults();
    closeAllLayers();
    openDimmedLayer();
    removeHiddenClass(this.element);
  }

  close() {
    closeAllLayers();
    this.resultList.emptyResults();
  }
}
