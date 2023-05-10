export class SearchModel {
  constructor() {
    this.searchText = '';
    this.recentSearches = [];
    this.recommendSearches = [];
    this.autoCompleteSearches = [];
    this.onChangedCallbacks = {};
    this.selectSuggestionIndex = -1;
  }

  getRecentSearches() {
    return [...this.recentSearches];
  }

  getRecommendSearches() {
    return [...this.recommendSearches];
  }

  getAutoCompleteSearches() {
    return [...this.autoCompleteSearches];
  }

  getSelectSuggestionIndex() {
    return this.selectSuggestionIndex;
  }

  setSelectSuggestionIndex(index) {
    this.selectSuggestionIndex = index;
  }

  onChanged(name, callback) {
    this.onChangedCallbacks[name] = callback;
  }

  async updateData(name, callback) {
    await this.onChangedCallbacks[name]();
    callback();
  }
}