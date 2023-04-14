export interface RecentSearch {
  text: string;
  id: number;
}

export class SearchSuggestionModel {
  private recentSearches: RecentSearch[];
  private recommendSearches: string[];
  private focusIndex: number;

  constructor() {
    this.recentSearches = [];
    this.recommendSearches = [];
    this.focusIndex = -1;
  }

  setRecentSearches(data: RecentSearch[]) {
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
}
