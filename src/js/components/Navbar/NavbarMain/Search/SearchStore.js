import { client } from '../../../../domain/client.js';

const STORAGE_KEY = 'searchHistory';

export default class SearchStore {
  constructor() {
    this.client = client;
    this.history = {};
    this.autoComplete = [];
    this.recommend = [];
    this.initStore();
  }

  async initStore() {
    this.recommend = await this.requestRecommendWords(10);

    const store = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!store) return;
    this.history = store;
  }

  async requestRecommendWords(wordCount) {
    const recommendWords = await this.client.fetchRecommendWords(wordCount);
    return recommendWords;
  }

  async requestAutoCompleteWords(value, wordCount) {
    this.autoComplete = await this.client.fetchAutoCompleteWords(value, wordCount);
  }

  addSearchWord(value) {
    const id = Date.now();
    this.history[id] = value;

    this.saveLocalStorage();
  }

  deleteSearchWord(id) {
    delete this.history[id];
    this.saveLocalStorage();
  }

  saveLocalStorage() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.history));
  }
}
