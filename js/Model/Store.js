export class Store {
  constructor() {
    this.searchData = {};
    this.sliderImgDate = {};
    this.sideBarDate = {};
  }

  saveServerData(data) {
    this.searchData.history = data.history;
    this.searchData.suggestions = data.suggestions;
    this.searchData.autoSuggestions = data.autoSuggestions;
    return this.searchData;
  }
}
