import { $, addOverClassIfAbsent, removeOverClass } from '../../utils/domUtils.js';
import { HistoryTemplateBuilder, RecommendTemplateBuilder } from './TemplateBuilder.js';

export class SearchResultList {
  constructor() {
    this.init();
    this.setEventHandlers();
  }

  init() {
    this.element = $('.search-layer__result-list');
    this.historyTemplateBuilder = new HistoryTemplateBuilder();
    this.recommendTemplateBuilder = new RecommendTemplateBuilder();
  }

  setEventHandlers() {
    this.element.addEventListener('mouseover', (event) => addOverClassIfAbsent(event.target));
    this.element.addEventListener('mouseout', (event) => removeOverClass(event.target));
  }

  async setDefaultResults() {
    const historyTemplate = await this.historyTemplateBuilder.createTotalTemplate();
    const recommendTemplate = await this.recommendTemplateBuilder.createTotalTemplate();
    this.element.insertAdjacentHTML('beforeend', historyTemplate + recommendTemplate);
  }

  async emptyResults() {
    const resultList = this.element;
    while (resultList.firstElementChild) {
      await resultList.removeChild(resultList.firstElementChild);
    }
  }
}
