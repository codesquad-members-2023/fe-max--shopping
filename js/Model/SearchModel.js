export class SearchModel {
  constructor() {
    this.observers = [];
    this.inputBarValue = '';
    this.focusIndex = -1;
    this.searchData = {};
  }

  registerObserver(observer) {
    this.observers.push(observer);
  }

  notifyAll() {
    this.observers.forEach((observer) => {
      observer.updateInputBar(this);
    });
  }

  saveInitialData(data) {
    this.searchData.searchHistory = data[0].content;
    this.searchData.suggestion = data[1].content;
    this.searchData.autoSuggestion = data[2].content;

    return this.searchData;
  }
}
