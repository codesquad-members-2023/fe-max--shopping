import { DataFetcher, HistoryFetcher, RecommendFetcher } from '../../utils/DataFetcher.js';

const API_URL = 'http://localhost:3000/';

class SuggestionListBuilder {
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

export class HistoryListBuilder extends SuggestionListBuilder {
  constructor() {
    super();
    this.dataFetcher = new HistoryFetcher(API_URL);
  }

  createUnitList(text) {
    return `<li class="search-layer__suggestion--history"><p>${text}</p><button class="search-layer__remove-button"><img src="src/asset/img/close.svg" alt="삭제"></button></li>`;
  }
}

export class RecommendListBuilder extends SuggestionListBuilder {
  constructor() {
    super();
    this.dataFetcher = new RecommendFetcher(API_URL);
  }

  createUnitList(text) {
    return `<li class="search-layer__suggestion--recommend"><p><a src=""><img src="src/asset/img/arrow-top-right.svg" alt="공유"></a>${text}</p></li>`;
  }
}
