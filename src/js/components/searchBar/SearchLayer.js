import { $, removeHiddenClass } from '../../utils/domUtils.js';
import { closeAllLayers } from '../modal.js';

export class SearchLayer {
  constructor() {
    this.init();
  }

  init() {
    this.element = $('.search-layer');
  }

  open() {
    closeAllLayers();
    removeHiddenClass(this.element);
  }
}