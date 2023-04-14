export interface searchData {
  text: string;
  id: number;
}

export class SearchSuggestionModel {
  private recentSearches: searchData[];
  private recommendSearches: string[];
  private focusIndex: number;
  private searchSuggestions: searchData[];

  constructor() {
    this.recentSearches = [];
    this.recommendSearches = [];
    this.focusIndex = -1;
    this.searchSuggestions = [];
  }

  setRecentSearches(data: searchData[]) {
    this.recentSearches = data;
  }

  setRecommendSearches(data: string[]) {
    this.recommendSearches = data;
  }

  getRecentSearches() {
    return this.recentSearches;
  }

  getRecommendSearches() {
    return this.recommendSearches;
  }

  getFocusIndex() {
    return this.focusIndex;
  }

  initFocusIndex() {
    this.focusIndex = -1;
  }

  incrementFocusIndex() {
    this.focusIndex += 1;
  }

  decrementFocusIndex() {
    if (this.focusIndex === -1) {
      return;
    }

    this.focusIndex -= 1;
  }

  setSearchSuggestions(suggestions: searchData[]) {
    this.searchSuggestions = suggestions;
  }

  getSearchSuggestions() {
    return this.searchSuggestions;
  }
}
