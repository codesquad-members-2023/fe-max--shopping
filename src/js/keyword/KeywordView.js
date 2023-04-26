export class KeywordView {
  constructor(layer, searchBar) {
    this.layer = layer;
    this.searchBar = searchBar;
  }

  renderKeywords(keywords) {
    keywords.map((keyword) => (this.layer.innerHTML += `<li>${keyword}</li>`));
  }

  addKeywordEventListner() {
    this.searchBar.addEventListener("input", this.getAutoKeyword);
    this.searchBar.addEventListener("click", this.showRecentAndRecommendKeyword);
  }
}
