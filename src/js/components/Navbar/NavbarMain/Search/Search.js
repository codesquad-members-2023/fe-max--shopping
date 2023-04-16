import { Main } from '../../../../Main.js';
import { debounce } from '../../../../utils/utils.js';
import { Component } from '../../../base/Component.js';
import SearchBar from './SearchBar.js';
import { SearchModel } from './SearchModel.js';
import { SearchPanel } from './SearchPanel.js';
import { client } from '/src/js/domain/client.js';

export default class Search extends Component {
  constructor() {
    super('search');
    this.model = new SearchModel();
    this.state = {
      history: [],
      recommend: [],
      autoComplete: [],
    };
    this.main = new Main();
    this.searchPanel = new SearchPanel(this.state, this.model);
    this.searchBar = new SearchBar();
    this.init();
    this.initState();
  }

  initEventHandlers() {
    this.node.addEventListener(
      'click',
      debounce(() => this.showRecommendWords(), 300)
    );
    this.node.addEventListener(
      'input',
      debounce(() => this.showAutoComplete(), 300)
    );
    this.node.addEventListener('keydown', ({ key }) => this.handleKeyDown(key));
    this.node.addEventListener('submit', (event) => this.handleSubmit(event));
  }

  async initState() {
    const recommendWords = await this.loadRecommendWords();
    this.state.recommend = recommendWords;
    this.state.history = this.model.getSearchHistory();
  }

  async loadRecommendWords() {
    const recommendWords = await client.fetchRecommendWords();
    return recommendWords;
  }

  handleKeyDown(key) {
    const isArrowDownKey = key === 'ArrowDown';
    const isArrowUpKey = key === 'ArrowUp';
    const isEscKey = key === 'Escape';

    if (isArrowDownKey || isArrowUpKey) {
      const value = this.searchPanel.onKeyDown(key);
      this.searchBar.setInputValue(value);
    }

    if (isEscKey) {
      this.closeSearchPanel();
    }
  }

  closeSearchPanel() {
    this.searchPanel.close();
    this.main.offDimmed();
  }

  handleSubmit(event) {
    event.preventDefault();

    const { search } = event.target.elements;
    const userInput = search.value;

    this.saveHistory(userInput);
    this.searchBar.clearInputValue();
  }

  saveHistory(userInput) {
    this.model.addSearchWord(userInput);
    this.state.history = this.model.getSearchHistory();
  }

  showRecommendWords() {
    if (this.getInputValue()) return;

    this.main.onDimmed();
    this.searchPanel.render({ history: this.state.history, recommend: this.state.recommend });
    this.searchPanel.open();
  }

  async showAutoComplete() {
    if (!this.getInputValue()) {
      this.showRecommendWords();
      return;
    }

    const autoCompleteWords = await this.loadAutoCompleteWords();
    this.state.autoComplete = autoCompleteWords;
    this.searchPanel.render({ recommend: this.state.autoComplete });
  }

  async loadAutoCompleteWords() {
    const userInput = this.getInputValue();
    const autoCompleteWords = await client.fetchAutoCompleteWords(userInput);

    return autoCompleteWords;
  }

  getInputValue() {
    return this.searchBar.getInputValue();
  }

  getTemplate() {
    return [this.searchBar.node, this.searchPanel.node];
  }
}
