import { client } from '/src/js/domain/client.js';

export class SearchStore {
  constructor() {
    this.client = client;
    this.history = {};
    this.autoComplete = [];
    this.recommend = [];
    this.initStore();
  }

  async initStore() {
    this.recommend = await this.requestRecommendWords(10);

    const store = JSON.parse(localStorage.getItem('searchHistory'));
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
    localStorage.setItem('searchHistory', JSON.stringify(this.history));
  }

  getRecommend() {
    return { history: this.history, recommend: this.recommend };
  }

  getAutoComplete() {
    return { autoComplete: this.autoComplete };
  }
}
