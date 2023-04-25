import { BASE_URL } from "../../api/index.js";

export default class SearchFormService {
  constructor() {
    this.prevSearchTerm;
  }

  async getAutocompleteData(searchTerm) {
    if (searchTerm === "") {
      const searchHistory = []; //- get from localStorage (5 items)
      const suggestions = await this.fetchAutocompleteData("suggestions");
      return JSON.stringify([...searchHistory, ...suggestions]);
    }

    const autocompleteData = await this.fetchAutocompleteData(searchTerm);
    this.prevSearchTerm = searchTerm;
    return JSON.stringify(autocompleteData);
  }

  async fetchAutocompleteData(searchTerm) {
    const queryParams = new URLSearchParams({ searchTerm });
    const res = await fetch(`${BASE_URL}/autocomplete?${queryParams}`);
    return await res.json();
  }

  isSameSearch(searchTerm) {
    return searchTerm === this.prevSearchTerm;
  }
}
