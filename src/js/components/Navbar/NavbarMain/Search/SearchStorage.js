const STORAGE_KEY = 'searchHistory';

export class SearchStorage {
  #storage;

  constructor() {
    this.#storage = {
      searchHistory: {},
    };
    this.init();
  }

  init() {
    const store = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (!store) return;
    this.#storage.searchHistory = store;
  }

  addSearchWord(value) {
    const id = Date.now();
    this.#storage.searchHistory[id] = value;

    this.saveLocalStorage();
  }

  deleteSearchWord(id) {
    delete this.#storage.searchHistory[id];
    this.saveLocalStorage();
  }

  saveLocalStorage() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.#storage.searchHistory));
  }

  getSearchHistory() {
    return this.#storage.searchHistory;
  }
}
