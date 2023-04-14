import { DataFetcher, HistoryFetcher, RecommendFetcher } from '../../utils/DataFetcher.js';

const API_URL = 'http://localhost:3000/';

class SuggestionListBuilder {
  constructor() {
    this.dataFetcher = new DataFetcher(API_URL);
  }

  async getData() {
    return await this.dataFetcher.getData();
  }

  async createTotalListElement() {
    const results = await this.getData();
    return results.map((result) => {
      return this.createUnitListElement(result.text);
    });
  }

  createUnitListElement(text) {
    return `${text}`;
  }
}

export class HistoryListBuilder extends SuggestionListBuilder {
  constructor() {
    super();
    this.dataFetcher = new HistoryFetcher(API_URL);
  }

  createUnitListElement(text) {
    const li = document.createElement('li');
    const contents = `<p>${text}</p><button class="search-layer__remove-button"><img src="src/asset/img/close.svg" alt="삭제"></button>`;

    li.className = 'search-layer__suggestion--history';
    li.insertAdjacentHTML('beforeend', contents);

    return li;
  }
}

export class RecommendListBuilder extends SuggestionListBuilder {
  constructor() {
    super();
    this.dataFetcher = new RecommendFetcher(API_URL);
  }

  createUnitListElement(text) {
    const li = document.createElement('li');
    const contents = `<p><a src=""><img src="src/asset/img/arrow-top-right.svg" alt="공유"></a>${text}</p>`;

    li.className = 'search-layer__suggestion--recommend';
    li.insertAdjacentHTML('beforeend', contents);

    return li;
  }
}
