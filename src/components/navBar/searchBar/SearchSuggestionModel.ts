export interface SearchData {
  text: string;
  id: number;
}

export class SearchSuggestionModel {
  private recentSearches: SearchData[];
  private recommendSearches: string[];
  private focusIndex: number;
  private searchSuggestions: SearchData[];

  constructor() {
    this.recentSearches = [];
    this.recommendSearches = [];
    this.focusIndex = -1;
    this.searchSuggestions = [];
  }

  setRecentSearches(data: SearchData[]) {
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

  setSearchSuggestions(suggestions: SearchData[]) {
    this.searchSuggestions = suggestions;
  }

  getSearchSuggestions() {
    return this.searchSuggestions;
  }
}
