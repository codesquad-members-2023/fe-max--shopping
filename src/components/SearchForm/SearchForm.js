import Component from "../common/Component.js";
import SearchFormService from "./SearchFormService.js";
import { debounce } from "../../utils/index.js";

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

class SearchForm extends Component {
  constructor() {
    super(template);
    this.searchInput = this.shadowRoot.querySelector("#search-input");
    this.autocompletePanel =
      this.shadowRoot.querySelector("autocomplete-panel");

    this.searchFormService = new SearchFormService({
      endpoint: "/autocomplete",
      defaultSearchTerm: "suggestions",
    });
  }

  connectedCallback() {
    const { searchInput } = this;

    searchInput.addEventListener(
      "input",
      debounce(this.searchInputHandler.bind(this), 300)
    );

    searchInput.addEventListener(
      "focus",
      this.searchInputFocusHandler.bind(this)
    );

    searchInput.addEventListener(
      "keydown",
      this.searchInputKeydownHandler.bind(this)
    );
  }

  async searchInputHandler() {
    const { searchInput, autocompletePanel, searchFormService } = this;
    const searchTerm = searchInput.value.trim();

    if (searchFormService.isSameSearch(searchTerm)) return;

    const autocompleteData = await searchFormService.getAutocompleteData(
      searchTerm
    );

    autocompletePanel.setResultsData(autocompleteData);
    autocompletePanel.resetFocusedListItemIdx();
  }

  async searchInputFocusHandler() {
    const { searchInput, autocompletePanel, searchFormService } = this;
    const searchTerm = searchInput.value.trim();

    const autocompleteData = await searchFormService.getAutocompleteData(
      searchTerm !== "" ? searchTerm : ""
    );

    autocompletePanel.showSelf();
    autocompletePanel.setResultsData(autocompleteData);
    autocompletePanel.resetFocusedListItemIdx();
  }

  searchInputKeydownHandler(evt) {
    const { autocompletePanel } = this;

    if (evt.isComposing) return;

    if (evt.code === "ArrowDown") {
      autocompletePanel.setFocusedListItemIdx(true);
    } else if (evt.code === "ArrowUp") {
      autocompletePanel.setFocusedListItemIdx(false);
    }
  }
}

customElements.define("search-form", SearchForm);
