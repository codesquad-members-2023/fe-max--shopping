export class Store {
  constructor() {
    this.searchData = {};
    this.sliderImgDate = {};
    this.sideBarDate = {};
  }

  saveServerData(data) {
    this.searchData.searchHistory = data[0].body;
    this.searchData.suggestion = data[1].body;
    this.searchData.autoSuggestion = data[2].body;

    return this.searchData;
  }
}
