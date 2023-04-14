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
    this.prevSearchTerm = null;
  }

  connectedCallback() {
    this.searchInput.addEventListener(
      "input",
      debounce(this.onSearchInput.bind(this), 1000)
    );

    this.searchInput.addEventListener("focus", () => {
      this.onSearchInput();
      this.notifyParentToDim(true);
    });

    this.searchInput.addEventListener("blur", () => {
      this.notifyParentToDim(false);
    });

    this.searchInput.addEventListener("keydown", (evt) => {
      if (evt.isComposing) return;

      if (evt.code === "ArrowDown") {
        this.autocompletePanel.setFocusedListItemIdx(true);
      } else if (evt.code === "ArrowUp") {
        this.autocompletePanel.setFocusedListItemIdx(false);
      }
    });
  }

  async onSearchInput() {
    const searchTerm = this.searchInput.value.trim();

    if (searchTerm === this.prevSearchTerm) return;

    this.prevSearchTerm = searchTerm;
    this.autocompletePanel.resetFocusedListItemIdx();

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

  notifyParentToDim(isActive) {
    const dimEvt = new CustomEvent("dim", {
      detail: {
        isActive: isActive,
      },
    });
    this.shadowRoot.host.getRootNode().host.dispatchEvent(dimEvt);
  }
}

customElements.define("search-form", SearchForm);
