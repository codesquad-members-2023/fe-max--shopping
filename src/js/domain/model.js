const STORAGE_KEY = 'searchHistory';
const storage = {
  searchHistory: {},
};

export const model = {
  initSearchWord() {
    const store = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!store) return;

    storage.searchHistory = store;
  },

  addSearchWord(value) {
    const id = Date.now();
    storage.searchHistory[id] = value;

    this.saveLocalStorage();
  },

  deleteSearchWord(id) {
    delete storage.searchHistory[id];
    this.saveLocalStorage();
  },

  saveLocalStorage() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(storage.searchHistory));
  },

  getSearchHistory() {
    return storage.searchHistory;
  },
};

model.initSearchWord();
