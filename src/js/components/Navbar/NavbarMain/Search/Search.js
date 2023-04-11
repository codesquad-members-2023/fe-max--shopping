import { Main } from '../../../../Main.js';
import { client } from '../../../../api/client.js';
import { Component } from '../../../base/Component.js';
import SearchBar from './SearchBar.js';

export default class Search extends Component {
  constructor() {
    super('search');
  }

  initEventHandlers() {
    this.$('.search-bar').addEventListener('click', () => this.showRecommendWords());
    this.$('.search-bar').addEventListener('input', () => this.showAutoComplete());
  }

  showRecommendWords() {
    this.$('.search-word').classList.add('active');
    Main.onDimmed();
  }

  getTemplate() {
    const searchBar = new SearchBar();
    const searchWord = new SearchWord();
    return [searchBar.node, searchWord.node];
  }
}

class SearchWord extends Component {
  #state;

  constructor() {
    super('search-word', 'UL');
    this.#state = {
      recommend: [],
      history: [],
    };
  }

  render() {
    this.renderRecommendWords();
  }

  async renderRecommendWords() {
    await this.loadRecommendWords();

    const recommendTemplate = this.#state.recommend.reduce((acc, cur) => {
      return acc + SearchWord.getRecommendTemplate(cur);
    }, '');

    this.node.insertAdjacentHTML('beforeend', recommendTemplate);
  }

  async loadRecommendWords() {
    const recommendWords = await client.fetchRecommendWords();
    this.#state.recommend = recommendWords;
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
