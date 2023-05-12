import ComponentWithBackDrop from "../common/ComponentWithBackDrop.js";

const template = document.createElement("template");
template.innerHTML = `
  <div class="autocomplete-container">
    <ul class="autocomplete-list"></ul>
  </div>

  <link rel="stylesheet" href="src/styles/components/AutocompletePanel.css">
`;

class AutocompletePanel extends ComponentWithBackDrop {
  constructor() {
    super(template);
    this.autocompleteList = this.shadowRoot.querySelector(".autocomplete-list");
    this.focusedListItemIdx = -1;
    this.searchTerm = "";

    this.registerCustomEvent("showSelf", {
      detail: { position: "MAIN" },
    });
    this.backDrop.registerListenable(this);
  }

  setFocusedListItemIdx(isIncrement) {
    const listItems = this.autocompleteList.children;
    const numItems = listItems.length;
    const prevFocusedItemIdx = this.focusedListItemIdx;

    this.focusedListItemIdx = isIncrement
      ? (this.focusedListItemIdx + 1) % numItems
      : (this.focusedListItemIdx - 1 + numItems) % numItems;

    listItems[prevFocusedItemIdx]?.classList.remove("is-focused");
    listItems[this.focusedListItemIdx]?.classList.add("is-focused");
  }

  resetFocusedListItemIdx() {
    this.focusedListItemIdx = -1;
  }

  setResultsData(newVal) {
    this.dataset.results = newVal;
  }

  static get observedAttributes() {
    return ["data-results"];
  }

  attributeChangedCallback(name, oldVal, newVal) {
    this.resetList();
    this.generateList(JSON.parse(newVal));
    // why if?
    // if (name === "data-results") {
    //   this.resetList();
    //   this.generateList(JSON.parse(newVal));
    // }
  }

  generateList(results) {
    const fragment = new DocumentFragment();

    results.forEach(
      ({ content, isSuggestion, isSearchHistory, isAutoComplete }) => {
        const autocompleteItem = document.createElement("li");
        const link = document.createElement("a");
        const contentSpan = document.createElement("span");

        if (isSuggestion) {
          const suggestionIcon = document.createElement("img");
          suggestionIcon.src = "src/assets/icons/arrow-top-right.svg";
          link.appendChild(suggestionIcon);
        }

        contentSpan.innerText = content;
        // link.href = `/search?q=${content}`; // link to search page
        autocompleteItem.classList.add("autocomplete-item");
        link.appendChild(contentSpan);

        if (isSearchHistory) {
          link.classList.add("search-history");
          const deleteIcon = document.createElement("img");
          deleteIcon.classList.add("btn-close");
          deleteIcon.src = "src/assets/icons/close.svg";
          link.appendChild(deleteIcon);
        }

        if (isAutoComplete) {
          contentSpan.innerHTML = content.replace(
            this.searchTerm,
            `<span class="highlighted">${this.searchTerm}</span>`
          );
          console.log(contentSpan.innerText);
        }
        autocompleteItem.appendChild(link);
        fragment.appendChild(autocompleteItem);
      }
    );

    this.autocompleteList.appendChild(fragment);
  }

  resetList() {
    this.autocompleteList.innerHTML = "";
  }
}

customElements.define("autocomplete-panel", AutocompletePanel);
