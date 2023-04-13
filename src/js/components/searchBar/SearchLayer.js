import { $, removeHiddenClass } from '../../utils/domUtils.js';
import { closeAllLayers, openDimmedLayer } from '../modal.js';
import { SearchResultList } from './SearchResultList.js';

export class SearchLayer {
  constructor(dataManager) {
    this.init(dataManager);
  }

  init(dataManager) {
    this.element = $('.search-layer');
    this.resultList = new SearchResultList(dataManager);
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
