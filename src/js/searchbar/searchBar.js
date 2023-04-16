import { debounce } from './util.js';

export class SearchBar {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.registerEventListeners();
  }

  registerEventListeners() {
    this.view.inputEl.addEventListener('click', () => this.handleInputClick());
    this.handleDebouncedInputChange = debounce(() => this.handleInputChange(), 300);
    this.view.inputEl.addEventListener('input', () => this.handleDebouncedInputChange());
    this.view.inputEl.addEventListener('keydown', (e) => this.handleKeyDown(e));
    this.view.buttonEl.addEventListener('click', () => this.handleButtonClick());
    this.view.listLayerEl.addEventListener('click', (e) => this.handleRemoveHistoryItem(e));
    document.addEventListener('click', (e) => this.handleDocumentClick(e));
  }

  async handleInputClick() {
    const totalData = await this.model.getRecommendedAndHistorySearchData();

    this.view.renderRecommendAndHistoryList(totalData);
    this.view.showSearchList();
  }

  async handleInputChange() {
    const inputValue = this.view.inputEl.value;
    const autoSearchData = await this.model.getAutoSearchData(inputValue);

    this.view.renderAutoSearchList(autoSearchData, inputValue);
  }

  handleButtonClick() {
    const inputValue = this.view.inputEl.value;

    this.model.updateHistoryData(inputValue);
    this.view.clearInputField();
  }

  handleRemoveHistoryItem(e) {
    if (e.target.matches('.search-item img')) {
      e.stopPropagation();
      const historyItemEl = e.target.closest('.search-item');
      const itemValue = historyItemEl.querySelector('p').textContent;

      this.model.removeHistoryData(itemValue);
      historyItemEl.remove();
    }
  }

  handleDocumentClick(e) {
    const isSearchBarClicked =
      this.view.listLayerEl.contains(e.target) || this.view.inputEl === e.target;

    if (!isSearchBarClicked) this.view.hideSearchList();
  }

  handleKeyDown({ key }) {
    if (key === 'ArrowUp' || key === 'ArrowDown') {
      event.preventDefault();
      this.view.move(key === 'ArrowUp' ? 'UP' : 'DOWN');
    } else if (key === 'Escape') {
      event.preventDefault();
      this.view.hideSearchList();
    }
  }
}
