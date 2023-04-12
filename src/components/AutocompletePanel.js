const template = document.createElement("template");
template.innerHTML = `
  <div class="autocomplete-container">
    <ul class="autocomplete-list"></ul>
  </div>

  <link rel="stylesheet" href="src/styles/components/AutocompletePanel.css">
`;

class AutocompletePanel extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.append(template.content.cloneNode(true));
    this.autocompleteList = this.shadowRoot.querySelector(".autocomplete-list");
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
}

customElements.define("autocomplete-panel", AutocompletePanel);
