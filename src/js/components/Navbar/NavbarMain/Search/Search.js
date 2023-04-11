import { Main } from '../../../../Main.js';
import { Component } from '../../../base/Component.js';
import SearchBar from './SearchBar.js';
import { client } from '/src/js/api/client.js';

export default class Search extends Component {
  #state;

  constructor() {
    super('search');
    this.#state = {
      recommend: [],
      history: [],
    };
  }

  getTemplate() {
    const searchBar = new SearchBar();
    const searchWord = new SearchWord();
    return [searchBar.node, searchWord.node];
  }

  initEventHandlers() {
    this.$('.search-bar').addEventListener('click', () => this.showRecommendWords());
    this.$('.search-bar').addEventListener('input', () => this.showAutoComplete());
  }

  async showRecommendWords() {
    if (this.getInputValue()) {
      return;
    }

    this.$('.search-word').classList.add('active');
    await this.loadRecommendWords();
    this.renderRecommendWords();
    Main.onDimmed();
  }

  async showAutoComplete() {
    await this.loadAutoCompleteWords();
    this.renderRecommendWords();
  }

  async renderRecommendWords() {
    const recommendTemplate = this.#state.recommend.reduce((acc, cur) => {
      return acc + SearchWord.getRecommendTemplate(cur);
    }, '');
    this.$('.search-word').innerHTML = '';
    this.$('.search-word').insertAdjacentHTML('beforeend', recommendTemplate);
  }

  async loadRecommendWords() {
    const recommendWords = await client.fetchRecommendWords();
    this.#state.recommend = recommendWords;
  }

  async loadAutoCompleteWords() {
    const userInput = this.getInputValue();
    if (!userInput) {
      return;
    }
    const autoCompleteWords = await client.fetchAutoCompleteWords(userInput);
    this.#state.recommend = autoCompleteWords;
  }

  getInputValue() {
    return this.$('input').value;
  }
}

class SearchWord extends Component {
  constructor() {
    super('search-word', 'UL');
  }

  static getRecommendTemplate(word) {
    return `
<li class="recommend">
  <a href=""><button class="shortcut-btn"></button>${word}</a>
</li>
    `;
  }

  static getHistoryTemplate(word) {
    return `
<li class="history">
  <a href="">${word}</a><button class="delete-btn"></button>
</li>
    `;
  }
}
