import { debounce } from "../utils/index.js";

const template = document.createElement("template");
template.innerHTML = `
  <form id="search-form">
    <input id="search-input" type="text" placeholder="검색 Amazon" autocomplete="off" />
    <button type="submit">
      <img src="src/assets/icons/search.svg" alt="Search"/>
    </button>
    <autocomplete-panel></autocomplete-panel>
  </form>

  <link rel="stylesheet" href="src/styles/components/SearchForm.css">
`;

class SearchForm extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.append(template.content.cloneNode(true));
    this.searchInput = this.shadowRoot.querySelector("#search-input");
    this.autocompletePanel =
      this.shadowRoot.querySelector("autocomplete-panel");
  }

  connectedCallback() {
    this.searchInput.addEventListener(
      "focus",
      () => {
        this.onSearchInput();
        // need to activate dimmed layer
      },
      { once: true }
    );

    this.searchInput.addEventListener(
      "input",
      debounce(this.onSearchInput.bind(this), 1000)
    );
  }

  async onSearchInput() {
    const searchTerm = this.searchInput.value.trim();

    if (searchTerm === "") {
      const searchHistory = []; // get from localStorage (5 items)
      const suggestions = await this.fetchAutocomplete("suggestions");
      this.autocompletePanel.setResultsData(
        JSON.stringify([...searchHistory, ...suggestions])
      );
      return;
    }

    const autocompleteData = await this.fetchAutocomplete(searchTerm);
    this.autocompletePanel.setResultsData(
      `${JSON.stringify(autocompleteData)}`
    );
  }

  async fetchAutocomplete(searchTerm) {
    const queryParams = new URLSearchParams({ searchTerm });
    const res = await fetch(
      `http://127.0.0.1:3000/autocomplete?${queryParams}`
    );
    return await res.json();
  }
}

customElements.define("search-form", SearchForm);
