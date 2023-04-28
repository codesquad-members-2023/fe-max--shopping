export class KeywordView {
  constructor(layer, searchBar) {
    this.layer = layer;
    this.searchBar = searchBar;
  }

  renderAutoKeywords(keywords) {
    keywords.map((keyword) => (this.layer.innerHTML += this.getAutoTemplate(keyword)));
  }

  renderRecentKeywords(keywords) {
    keywords.map((keyword) => (this.layer.innerHTML += this.getRecentTemplate(keyword)));
  }

  renderRecommendKeywords(keywords) {
    keywords.map((keyword) => (this.layer.innerHTML += this.getRecommendTemplate(keyword.text)));
  }

  getAutoTemplate(keyword) {
    return `
      <li class="auto-keyword">
        ${keyword}
      </li>
    `;
  }

  getRecentTemplate(keyword) {
    return `
      <li class="recent-keyword">
        ${keyword}
        <img src="./src/assets/svg/close.svg" class="delete-btn">
      </li>
    `;
  }

  getRecommendTemplate(keyword) {
    return `
      <li class="recommend-keyword">
        <img src="./src/assets/svg/arrow-top-right.svg">
        ${keyword}
      </li>
    `;
  }

  addKeywordEventListner() {
    this.searchBar.addEventListener("input", (e) => {
      const userInput = e.target.value;
      this.showAutoKeyword(userInput);
    });
    this.searchBar.addEventListener("click", this.showRecentAndRecommendKeyword, { once: true });
  }
}
