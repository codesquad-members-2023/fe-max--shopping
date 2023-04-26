import { debounce } from '../../../../utils/utils.js';
import { Component } from '../../../base/Component.js';
import { SearchStore } from '../Search/SearchStore.js';
import SearchBar from './SearchBar.js';
import { SearchPanel } from './SearchPanel.js';

export default class Search extends Component {
  constructor(main) {
    super('search');
    this.main = main;
    this.store = new SearchStore();
    this.searchPanel = new SearchPanel();
    this.searchBar = new SearchBar();
    this.init();
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
    this.node.addEventListener('click', ({ target }) => {
      if (target.matches('.delete-btn')) {
        this.deleteItem(target);
      }
    });
  }

  deleteItem(target) {
    const targetItem = target.closest('li');
    this.store.deleteSearchWord(targetItem.dataset.id);
  }

  async showRecommendWords({ target }) {
    const userInput = target.value;
    if (userInput) return;

    const { history, recommend } = this.store.getRecommend();
    this.searchPanel.render({ history: history, keywords: recommend });
    this.searchPanel.open();
    this.main.onDimmed();
  }

  async showAutoComplete({ target }) {
    const userInput = target.value;
    if (!userInput) {
      this.showRecommendWords({ target });
      return;
    }

    await this.store.requestAutoCompleteWords(userInput, 10);
    const { autoComplete } = this.store.getAutoComplete();

    this.searchPanel.render({ keywords: autoComplete, history: [] }, { value: userInput });
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
    this.store.addSearchWord(userInput);

    const { history, recommend } = this.store.getRecommend();
    this.searchPanel.render({ history: history, keywords: recommend });
    this.searchBar.clearInputValue();
  }

  getTemplate() {
    return [this.searchBar.node, this.searchPanel.node];
  }
}
