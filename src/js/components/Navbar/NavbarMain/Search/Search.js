import { Main } from '../../../../Main.js';
import { debounce } from '../../../../utils/utils.js';
import { Component } from '../../../base/Component.js';
import SearchBar from './SearchBar.js';
import { SearchWord } from './SearchWord.js';
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

  initEventHandlers() {
    this.$('.search-bar').addEventListener(
      'click',
      debounce(() => this.showRecommendWords(), 300)
    );
    this.$('.search-bar').addEventListener(
      'input',
      debounce(() => this.showAutoComplete(), 300)
    );
  }

  async showRecommendWords() {
    if (this.getInputValue()) return;

    const recommendWords = await this.loadRecommendWords();
    this.#state.recommend = recommendWords;

    this.renderSearchWords(this.#state);
    Main.onDimmed();
  }

  async loadRecommendWords() {
    const recommendWords = await client.fetchRecommendWords();
    return recommendWords;
  }

  async showAutoComplete() {
    if (!this.getInputValue()) return;

    const autoCompleteWords = await this.loadAutoCompleteWords();
    this.#state.recommend = autoCompleteWords;

    this.renderSearchWords(this.#state);
  }

  async loadAutoCompleteWords() {
    const userInput = this.getInputValue();
    const autoCompleteWords = await client.fetchAutoCompleteWords(userInput);

    return autoCompleteWords;
  }

  renderSearchWords(state) {
    const searchWord = new SearchWord(state);
    this.$('.search-word').replaceWith(searchWord.node);
    this.$('.search-word').classList.add('active');
  }

  getInputValue() {
    return this.$('input').value;
  }

  getTemplate() {
    const searchWord = new SearchWord({ recommend: [] });
    const searchBar = new SearchBar();
    return [searchBar.node, searchWord.node];
  }
}
