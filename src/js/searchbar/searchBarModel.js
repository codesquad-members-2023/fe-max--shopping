import { JsonData, ApiData, LocalStorageData } from './dataFatcher.js';

export class Model {
  constructor() {
    this.apiDataFetcher = new ApiData();
    this.jsonDataFetcher = new JsonData();
    this.localStorageFetcher = new LocalStorageData();
  }

  async getRecommendedAndHistorySearchData() {
    const recommendedSearchData = await this.jsonDataFetcher.getData();
    const historySearchData = await this.localStorageFetcher.getData();

    return { recommendedSearchData, historySearchData };
  }

  getAutoSearchData(prefix) {
    return this.apiDataFetcher.getData(prefix);
  }

  updateHistoryData(itemValue) {
    this.localStorageFetcher.updateData(itemValue);
  }

  removeHistoryData(itemValue) {
    this.localStorageFetcher.removeData(itemValue);
  }
}
