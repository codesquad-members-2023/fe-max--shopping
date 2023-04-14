import { Main } from '../../../../Main.js';
import { Model } from '../../../../domain/model.js';
import { debounce } from '../../../../utils/utils.js';
import { Component } from '../../../base/Component.js';
import SearchBar from './SearchBar.js';
import { SearchController } from './SearchController.js';
import { SearchPanel } from './SearchPanel.js';
import { client } from '/src/js/domain/client.js';

export default class Search extends Component {
  constructor() {
    super('search');
    this.state = {
      history: model.getSearchHistory(),
      recommend: [],
    };
    this.main = new Main();
    this.model = new Model();
    this.searchPanel = new SearchPanel(this.state, this.model);
    this.searchBar = new SearchBar();
    this.controller = new SearchController({
      onRecommendChanged: (recommend) => {
        this.onRecommendChanged(recommend);
      },
    });
    this.init();
  }

  onRecommendChanged(recommend) {
    this.state.recommend = recommend;
    this.main.onDimmed();
    this.renderSearchPanel(this.state);
  }

  initEventHandlers() {
    this.node.addEventListener(
      'click',
      debounce(async () => {
        if (this.getInputValue()) return;
        this.controller.startLoadRecommend();
      }, 300)
    );
    this.node.addEventListener(
      'input',
      debounce(() => this.showAutoComplete(), 300)
    );
    this.node.addEventListener('keydown', ({ key }) => this.handleKeyDown(key));
    this.node.addEventListener('submit', (event) => this.handleSubmit(event));
  }

  handleSubmit(event) {
    event.preventDefault();

    const { search } = event.target.elements;
    const userInput = search.value;

    this.saveHistory(userInput);
    this.renderSearchPanel(this.state);
    this.searchBar.clearInputValue();
  }

  saveHistory(userInput) {
    this.model.addSearchWord(userInput);
    this.state.history = this.model.getSearchHistory();
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
      this.searchPanel.close();
      this.main.offDimmed();
    }
  }

  async showAutoComplete() {
    if (!this.getInputValue()) {
      this.showRecommendWords();
      return;
    }

    const autoCompleteWords = await this.loadAutoCompleteWords();
    this.state.recommend = autoCompleteWords;

    this.renderSearchPanel(this.state);
  }

  async loadAutoCompleteWords() {
    const userInput = this.getInputValue();
    const autoCompleteWords = await client.fetchAutoCompleteWords(userInput);

    return autoCompleteWords;
  }

  renderSearchPanel(state) {
    this.searchPanel.render(state);
    this.searchPanel.open();
  }

  getInputValue() {
    return this.searchBar.getInputValue();
  }

  getTemplate() {
    return [this.searchBar.node, this.searchPanel.node];
  }
}
