import { DataManager, HistoryManager, RecommendManager } from "../../utils/DataManager.js";

const API_URL = 'http://localhost:3000/';

class TemplateBuilder {
  constructor() {
    this.dataManager = new DataManager(API_URL);
  }

  async getData() {
    return await this.dataManager.fetchData();
  }

  async createTotalTemplate() {
    const results = await this.getData();
    return results
      .map((result) => {
        return this.createUnitTemplate(result.text)
      })
      .reduce((prev, next) => prev + next, ``);
  }

  createUnitTemplate(text) {
    return `${text}`;
  }
}

export class HistoryTemplateBuilder extends TemplateBuilder {
  constructor(dataManager) {
    super(dataManager);
    this.dataManager = new HistoryManager(API_URL);
  }

  createUnitTemplate(text) {
    return `<li class="search-layer__result-list--history"><p>${text}</p><button class="search-layer__remove-button"><img src="src/asset/img/close.svg" alt="삭제"></button></li>`
  }
}

export class RecommendTemplateBuilder extends TemplateBuilder {
  constructor(dataManager) {
    super(dataManager);
    this.dataManager = new RecommendManager(API_URL);
  }

  createUnitTemplate(text) {
    return  `<li class="search-layer__result-list--recommend"><p><a src=""><img src="src/asset/img/arrow-top-right.svg" alt="공유"></a>${text}</p></li>`
  }
}
