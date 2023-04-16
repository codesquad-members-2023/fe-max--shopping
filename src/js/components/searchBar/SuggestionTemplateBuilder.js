import { DataFetcher } from '../../utils/DataFetcher.js';
import { API_URL } from '../../utils/constants.js';

class SuggestionTemplateBuilder {
  constructor() {
    this.dataFetcher = new DataFetcher(API_URL);
  }

  async getData() {
    return await this.dataFetcher.getData();
  }

  async createTotalList() {
    const results = await this.getData();
    return results.map((result) => this.createUnitList(result.text));
  }

  createUnitList(text) {
    return `${text}`;
  }
}

export class HistoryTemplateBuilder extends SuggestionTemplateBuilder {
  async getData() {
    return await this.dataFetcher.getData('history?_limit=5&_sort=id&_order=desc');
  }

  createUnitList(text) {
    return `<li class="search-layer__suggestion--history"><p>${text}</p><button class="search-layer__remove-button"><img src="src/asset/img/close.svg" alt="삭제"></button></li>`;
  }
}

export class RecommendTemplateBuilder extends SuggestionTemplateBuilder {
  async getData() {
    return await this.dataFetcher.getData('recommend?_limit=10');
  }

  createUnitList(text) {
    return `<li class="search-layer__suggestion--recommend"><p><a src=""><img src="src/asset/img/arrow-top-right.svg" alt="공유"></a>${text}</p></li>`;
  }
}
