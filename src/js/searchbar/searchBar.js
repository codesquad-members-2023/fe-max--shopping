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
}
