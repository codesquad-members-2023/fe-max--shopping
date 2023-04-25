import { client } from './client.js';

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
}

export const categoryStore = {
  mainCategories: [],
  subCategories: new Map(),

  async requestMainCategories() {
    this.mainCategories = await client.fetchCategories();
  },

  async requestSubCategories() {
    const subCategoryInfos = await client.fetchSubCategory();

    subCategoryInfos.forEach((info) => {
      const { id, details } = info;
      this.subCategories[id] = details;
    });
  },
};

export const sliderStore = {
  images: [],

  async requestImages(slideCount) {
    this.images = await client.fetchHeroImages(slideCount);
  },
};
