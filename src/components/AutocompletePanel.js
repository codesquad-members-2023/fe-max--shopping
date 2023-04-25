import Component from "./common/Component.js";

const template = document.createElement("template");
template.innerHTML = `
  <div class="autocomplete-container">
    <ul class="autocomplete-list"></ul>
  </div>

  <link rel="stylesheet" href="src/styles/components/AutocompletePanel.css">
`;

class AutocompletePanel extends Component {
  constructor() {
    super(template);
    this.autocompleteList = this.shadowRoot.querySelector(".autocomplete-list");
    this.backDrop = document.querySelector("back-drop");
    this.focusedListItemIdx = -1;
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
    if (name === "data-results") {
      this.resetList();
      this.generateList(JSON.parse(newVal));
    }
  }

  generateList(results) {
    const fragment = new DocumentFragment();

    results.forEach(({ content, isSuggestion }) => {
      const autocompleteItem = document.createElement("li");
      const link = document.createElement("a");
      const contentSpan = document.createElement("span");

      if (isSuggestion) {
        const suggestionIcon = document.createElement("img");
        suggestionIcon.src = "src/assets/icons/arrow-top-right.svg";
        link.appendChild(suggestionIcon);
      }
      contentSpan.innerText = content;
      // link.href = `/search/${content}`; // Link to search page
      autocompleteItem.classList.add("autocomplete-item");

      link.appendChild(contentSpan);
      autocompleteItem.appendChild(link);
      fragment.appendChild(autocompleteItem);
    });

    this.autocompleteList.appendChild(fragment);
  }

  resetList() {
    this.autocompleteList.innerHTML = "";
  }

  showSelf() {
    this.classList.add("is-active");
    this.backDrop.activate({ possessor: this, top: 56, left: 0 });
  }

  hideSelf() {
    this.classList.remove("is-active");
    this.backDrop.deactivate();
  }
}

customElements.define("autocomplete-panel", AutocompletePanel);
