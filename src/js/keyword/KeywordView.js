export class KeywordView {
  constructor(layer, searchBar, searchInput, searchBtn) {
    this.layer = layer;
    this.searchBar = searchBar;
    this.searchInput = searchInput;
    this.searchBtn = searchBtn;
    this.template = "";
  }

  render() {
    this.layer.innerHTML = this.template;
  }

  resetTemplate() {
    this.template = "";
  }

  generateAutoTemplate(keywords) {
    return keywords
      .map(
        (keyword) =>
          `<li class="auto-keyword">
            ${keyword}
          </li>`
      )
      .join("");
  }

  generateRecentTemplate(keywords) {
    return keywords
      .map(
        (keyword) =>
          `<li class="recent-keyword">
            ${keyword}
            <img src="./src/assets/svg/close.svg" class="delete-btn">
          </li>`
      )
      .join("");
  }

  generateRecommendTemplate(keywords) {
    return keywords
      .map(
        (keyword) =>
          `<li class="recommend-keyword">
            <img src="./src/assets/svg/arrow-top-right.svg">
            ${keyword.text}
          </li>`
      )
      .join("");
  }

  addKeywordEventListener() {
    this.searchBtn.addEventListener("click", () => {
      const userInput = this.searchInput.value;
      this.setRecentKeywords(userInput);
    });
    const deleteBtn = document.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", (event) => {
      event.target.parentNode.remove();
    });
    // this.searchBar.addEventListener("input", this.showAutoKeyword);
    // this.searchBar.addEventListener("click", this.showRecentAndRecommendKeyword);
  }
}
