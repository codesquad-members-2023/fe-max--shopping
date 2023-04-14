export class Model {
  constructor() {
    this.STORAGE_KEY = 'searchHistory';
    this.storage = {
      searchHistory: {},
    };
    initSearchWord();
  }

  addSearchWord(value) {
    const id = Date.now();
    this.storage.searchHistory[id] = value;

    this.saveLocalStorage();
  }

  deleteSearchWord(id) {
    delete this.storage.searchHistory[id];
    this.saveLocalStorage();
  }

  saveLocalStorage() {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.storage.searchHistory));
  }

  getSearchHistory() {
    return this.storage.searchHistory;
  }
};
