export class SearchModel {
  constructor() {
    this.searchText = '';
    this.searchBarState = "default";
    this.autoCompleteText = "";
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

  getSuggestion() {
    return this.suggestion;
  }

  getSelectSuggestionIndex() {
    return this.selectSuggestionIndex;
  }
  
  getAutoCompleteText(){
    return this.autoCompleteText;
  }

  setSearchBarState(state,text="") {
    const isDefault = state === "default";
    const isAutocomplete = state === "autoComplete"
    if(isDefault) {
      this.suggestion = [...this.recentSearches, ...this.recommendSearches];
    }
    if(isAutocomplete){
      this.suggestion = [...this.autoCompleteSearches];
    }
    this.setAutoCompleteText(text);
    this.searchBarState = state;
  }

  setSelectSuggestionIndex(index) {
    this.selectSuggestionIndex = index;
  }

  setDefaultSearches(fetchData) {
    [this.recentSearches, this.recommendSearches] = fetchData;
  }

  setAutoSearches(fetchData) {
    this.autoCompleteSearches = fetchData;
  }

  setAutoCompleteText(text) {
    this.autoCompleteText = text;
  }

  updateSelectedIndex(key) {
    const currentIndex = this.getSelectSuggestionIndex();
    const suggestionMaxIndex = this.suggestion.length - 1;
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

  clearIndex() {
    this.selectSuggestionIndex = -1;
  }

  onChanged(name, callback) {
    this.onChangedCallbacks[name] = callback;
  }

   updateData(name) {
     this.onChangedCallbacks[name]();
  }
}