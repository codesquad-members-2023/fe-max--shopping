import { Main } from '../../../../Main.js';
import { debounce } from '../../../../utils/utils.js';
import { Component } from '../../../base/Component.js';
import SearchBar from './SearchBar.js';
import { SearchPanel } from './SearchPanel.js';
import { client } from '/src/js/api/client.js';

export default class Search extends Component {
  #state;

  constructor() {
    super('search');
    this.#state = {
      history: [],
      recommend: [],
    };
    this.main = new Main();
    this.searchPanel = new SearchPanel(this.#state);
    this.searchBar = new SearchBar();
    this.init();
  }

  initEventHandlers() {
    this.searchBar.node.addEventListener(
      'click',
      debounce(() => this.showRecommendWords(), 300)
    );
    this.searchBar.node.addEventListener(
      'input',
      debounce(() => this.showAutoComplete(), 300)
    );
  }

  async showRecommendWords() {
    if (this.getInputValue()) return;

    const recommendWords = await this.loadRecommendWords();
    this.#state.recommend = recommendWords;

    this.main.onDimmed();
    this.renderSearchPanel(this.#state);
  }

  async loadRecommendWords() {
    const recommendWords = await client.fetchRecommendWords();
    return recommendWords;
  }

  async showAutoComplete() {
    if (!this.getInputValue()) {
      this.showRecommendWords();
      return;
    }

    const autoCompleteWords = await this.loadAutoCompleteWords();
    this.#state.recommend = autoCompleteWords;

    this.renderSearchPanel(this.#state);
  }

  async loadAutoCompleteWords() {
    const userInput = this.getInputValue();
    const autoCompleteWords = await client.fetchAutoCompleteWords(userInput);

    return autoCompleteWords;
  }

  renderSearchPanel(state) {
    this.searchPanel = new SearchPanel(state);
    this.$('.search-panel').replaceWith(this.searchPanel.node);
    this.searchPanel.open();
  }

  getInputValue() {
    return this.searchBar.getInputValue();
  }

  getTemplate() {
    return [this.searchBar.node, this.searchPanel.node];
  }
}
