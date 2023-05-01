export class SearchModel {
  constructor() {
    this.searchText = '';
    this.recentSearches = [];
    this.recommendSearches = [];
    this.autoCompleteSearches = [];
    this.onChangedCallbacks = {};
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

  onChanged(name, callback) {
    this.onChangedCallbacks[name] = callback;
  }

  updateData(callback) {
    this.onChangedCallbacks.defaultSuggestions()
    .then((data) => {
      [this.recentSearches, this.recommendSearches] = data;
    })
    .then(callback);
  }
}