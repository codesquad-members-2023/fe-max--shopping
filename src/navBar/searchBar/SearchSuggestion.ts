import { $ } from "../../utils/domUtils";
import { SearchSuggestionView } from "./SearchSuggestionView";

export interface RecentSearch {
  text: string;
  id: number;
}

export class SearchSuggestion {
  recentSearches: RecentSearch[];
  recommendSearches: string[];
  searchSuggestionView: SearchSuggestionView;

  constructor() {
    this.recentSearches = [];
    this.recommendSearches = [];
    this.searchSuggestionView = new SearchSuggestionView();

    (async () => {
      [this.recentSearches, this.recommendSearches] = await Promise.all([
        this.getRecentSearches(),
        this.getRecommendSearches(),
      ]);
      this.renderView();
    })();
  }

  async getRecentSearches(): Promise<RecentSearch[]> {
    const response = await fetch("http://localhost:5000/recent");

    return await response.json();
  }

  async getRecommendSearches(): Promise<string[]> {
    const response = await fetch("http://localhost:5000/recommend");

    return await response.json();
  }

  renderView() {
    const searchSuggestion = $(".search-suggestion");

    searchSuggestion.innerHTML =
      this.searchSuggestionView.recentSearchView(this.recentSearches) +
      this.searchSuggestionView.recommendSearchView(this.recommendSearches);
  }
}
