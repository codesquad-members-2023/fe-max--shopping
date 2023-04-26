class KeywordView {
  constructor(layer, searchBar) {
    this.layer = layer;
    this.searchBar = searchBar;
  }

  renderKeywords(keywords) {
    keywords.map((keyword) => (this.layer.innerHTML += `<li>${keyword}</li>`));
  }

  addKeywordInputListener() {
    this.searchBar.addEventListener("input", this.getKeywordHandler);
  }

  addKeywordClickListener() {
    this.searchBar.addEventListener("click", this.searchBarClickHandler);
  }

  addKeywordBlurListener() {
    this.searchBar.addEventListener("blur", this.searchBarBlurHandler);
  }
}
