export class SearchModel {
  constructor() {
    this.observers = [];
    this.inputBarValue = '';
    this.focusIndex = -1;
    this.searchData = {};
    this.sliderImgDate = {};
    this.sideBarDate = {};
  }

  registerObserver(observer) {
    this.observers.push(observer);
  }

  notifyAll() {
    this.observers.forEach((observer) => {
      observer.updateInputBar(this);
    });
  }

  saveServerData(data) {
    this.searchData.searchHistory = data[0].body;
    this.searchData.suggestion = data[1].body;
    this.searchData.autoSuggestion = data[2].body;

    return this.searchData;
  }
}
