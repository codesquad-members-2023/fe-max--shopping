import { BASE_URL } from "../../api/index.js";

export default class SearchFormService {
  constructor({ endpoint, defaultSearchTerm }) {
    this.endpoint = endpoint;
    this.defaultSearchTerm = defaultSearchTerm;
    this.prevSearchTerm;
  }

  async getAutocompleteData(searchTerm) {
    if (searchTerm === "" || searchTerm === "\u{1C}") {
      const searchHistory = []; // - get from localStorage (5 items) or express server?
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
}
