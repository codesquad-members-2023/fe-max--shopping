import { $, addOverClassIfAbsent, removeOverClass } from '../../utils/domUtils.js';

export class SearchResultList {
  constructor(dataManager) {
    this.init(dataManager);
    this.setEventHandlers();
  }

  init(dataManager) {
    this.element = $('.search-layer__result-list');
    this.dataManager = dataManager;
  }

  setEventHandlers() {
    this.element.addEventListener('mouseover', (event) => {
      addOverClassIfAbsent(event.target);
    });
    this.element.addEventListener('mouseout', (event) => {
      removeOverClass(event.target);
    });
  }

  async setDefaultResults() {
    const resultData = await this.dataManager.fetchDefaultData();
    const template = this.createTemplateWithData(resultData);
    this.element.insertAdjacentHTML('beforeend', template);
  }

  createTemplateWithData({ histories, recommends }) {
    const historyTemplates = histories.map(
      (history) =>
        `<li class="search-layer__result-list--history"><p>${history.text}</p><button class="search-layer__remove-button"><img src="src/asset/img/close.svg" alt="삭제"></button></li>`
    );
    const recommendTemplates = recommends.map((recommend) => `<li class="search-layer__result-list--recommend"><p><a src=""><img src="src/asset/img/arrow-top-right.svg" alt="공유"></a>${recommend.text}</p></li>`);

    return [...historyTemplates, ...recommendTemplates].reduce((o, n) => o + '\n' + n, '');
    // return dataList.map((data) => `<li>${data.text}</li>`).reduce((o, n) => o + n, ``);
  }

  async emptyResults() {
    const resultList = this.element;
    while (resultList.firstElementChild) {
      await resultList.removeChild(resultList.firstElementChild);
    }
  }
}
