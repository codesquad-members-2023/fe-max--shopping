export class SearchBarModel {
  constructor(data) {
    this.isFocus = false;
    this.data = data;
  }

  async getHistory() {
    const fetchedData = await this.data;
    return fetchedData.history;
  }

  async getRecommend() {
    const fetchedData = await this.data;
    return fetchedData.recommend;
  }

  focusInSearchBar() {
    this.isFocus = true;
  }

  focusOutSearchBar() {
    this.isFocus = false;
  }
}
