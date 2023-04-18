import { debounce } from '../../../../utils/utils.js';
import { Main } from '../../../Main.js';
import { Component } from '../../../base/Component.js';
import SearchBar from './SearchBar.js';
import { SearchPanel } from './SearchPanel.js';
import { SearchStorage } from './SearchStorage.js';
import { client } from '/src/js/domain/client.js';

export default class Search extends Component {
  constructor() {
    super('search');
    this.storage = new SearchStorage();
    this.client = client;
    this.state = {
      history: [],
      recommend: [],
      autoComplete: [],
    };
    this.main = new Main();
    this.searchPanel = new SearchPanel(this.state, this.storage);
    this.searchBar = new SearchBar();
    this.init();
    this.initState();
  }

  initEventHandlers() {
    this.node.addEventListener(
      'click',
      debounce((event) => this.showRecommendWords(event), 300)
    );
    this.node.addEventListener(
      'input',
      debounce((event) => this.showAutoComplete(event), 300)
    );
    this.node.addEventListener('keydown', ({ key }) => this.handleKeyDown(key));
    this.node.addEventListener('submit', (event) => this.handleSubmit(event));
  }

  async initState() {
    this.state.recommend = await this.client.fetchRecommendWords(10);
    this.state.history = this.storage.getSearchHistory();
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
    this.storage.addSearchWord(userInput);
    this.state.history = this.storage.getSearchHistory();
  }

  showRecommendWords({ target }) {
    const userInput = target.value;
    if (userInput) return;

    this.main.onDimmed();
    this.searchPanel.render({ history: this.state.history, recommend: this.state.recommend });
    this.searchPanel.open();
  }

  async showAutoComplete({ target }) {
    const userInput = target.value;
    if (!userInput) {
      this.showRecommendWords({ target });
      return;
    }

    const autoCompleteWords = await this.client.fetchAutoCompleteWords(userInput, 10);
    this.state.autoComplete = autoCompleteWords;

    this.searchPanel.render({ recommend: this.state.autoComplete });
  }

  getTemplate() {
    return [this.searchBar.node, this.searchPanel.node];
  }
}
