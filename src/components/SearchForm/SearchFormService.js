import { BASE_URL } from "../../api/index.js";

export default class SearchFormService {
  constructor({ endpoint, defaultSearchTerm }) {
    this.endpoint = endpoint;
    this.defaultSearchTerm = defaultSearchTerm;
    this.prevSearchTerm;
    this.searchHistory = JSON.parse(localStorage.getItem("searchHistory"));
  }

  async getAutocompleteData(searchTerm) {
    if (searchTerm === "" || searchTerm === "\u{1C}") {
      if (!this.searchHistory) {
        localStorage.setItem("searchHistory", JSON.stringify([]));
        this.searchHistory = JSON.parse(localStorage.getItem("searchHistory"));
      }
      const searchHistory = JSON.parse(localStorage.getItem("searchHistory"))
        .toReversed()
        .slice(0, 5); // - get from localStorage (5 items)

      const defaultResults = await this.fetchAutocompleteData(
        this.defaultSearchTerm
      );

      return JSON.stringify([...searchHistory, ...defaultResults]);
    }

    const autocompleteData = await this.fetchAutocompleteData(searchTerm);
    this.prevSearchTerm = searchTerm;
    return JSON.stringify(autocompleteData);
  }

  async fetchAutocompleteData(searchTerm) {
    const queryParams = new URLSearchParams({ searchTerm });
    const res = await fetch(`${BASE_URL}${this.endpoint}?${queryParams}`);
    return await res.json();
  }

  isSameSearch(searchTerm) {
    return searchTerm === this.prevSearchTerm;
  }

  saveSearchHistory(searchTerm) {
    this.searchHistory.push({ content: searchTerm, isSearchHistory: true });
    localStorage.setItem("searchHistory", JSON.stringify(this.searchHistory));
    console.log(JSON.parse(localStorage.getItem("searchHistory")));
  }
}
