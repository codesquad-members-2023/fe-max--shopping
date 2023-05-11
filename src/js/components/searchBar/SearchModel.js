export class SearchModel {
  constructor() {
    this.searchText = '';
    this.searchBarState = "default";
    this.recentSearches = [];
    this.recommendSearches = [];
    this.autoCompleteSearches = [];
    this.suggestion = [];
    this.onChangedCallbacks = {};
    this.selectSuggestionIndex = -1;
  }

  getSearchBarState() {
    return this.searchBarState;
  }

  getRecentSearches() {
    return this.recentSearches;
  }

  getRecommendSearches() {
    return this.recommendSearches;
  }

  getAutoCompleteSearches() {
    return this.autoCompleteSearches;
  }

  getSelectSuggestionIndex() {
    return this.selectSuggestionIndex;
  }

  setSelectSuggestionIndex(index) {
    this.selectSuggestionIndex = index;
  }

  updateSelectedIndex(key) {
    const currentIndex = this.getSelectSuggestionIndex();
    const suggestionMaxIndex = this.searchBarState === "default" 
        ? this.recentSearches.length - 1 + this.recommendSearches.length - 1 
        : this.autoCompleteSearches.length - 1

    const nextIndex = this.calculateNextIndex(key, currentIndex, suggestionMaxIndex);
    this.selectSuggestionIndex = nextIndex;
  }

  calculateNextIndex(key, currentIndex, maxIndex) {
    if (key === "ArrowUp") {
      return currentIndex === -1 ? maxIndex : (currentIndex - 1 + maxIndex + 1) % (maxIndex + 1);
    } else {
      return currentIndex === -1 ? 0 : (currentIndex + 1 + maxIndex + 1) % (maxIndex + 1);
    }
  }

  setDefaultSearches(fetchData) {
    [this.recentSearches, this.recommendSearches] = fetchData;
  }

  onChanged(name, callback) {
    this.onChangedCallbacks[name] = callback;
  }

   updateData(name) {
     this.onChangedCallbacks[name]();
  }
}