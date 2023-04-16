export class Model {
  constructor(dataSrc) {
    this.dataSrc = dataSrc;
  }

  async getRecommendedAndHistorySearchData() {
    const recommendedSearchData = await this.dataSrc.recommend.fetchData();
    const historySearchData = await this.dataSrc.history.getData();

    return { recommendedSearchData, historySearchData };
  }

  getAutoSearchData(prefix) {
    return this.dataSrc.auto.getData(prefix);
  }

  updateHistoryData(itemValue) {
    this.dataSrc.history.updateData(itemValue);
  }

  removeHistoryData(itemValue) {
    this.dataSrc.history.removeData(itemValue);
  }
}
