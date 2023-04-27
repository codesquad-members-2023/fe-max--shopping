import { Base } from "../../../Base.js";

export class View extends Base {
  constructor() {
    super("div");
    this.setAttribute("id", "searchBar");
    this.init();
  }

  init() {
    this.addChild();
    this.setChildren(this.layer);
  }

  addChild() {
    const template = `
      <input class="inputBar" placeholder="검색 Amazon" data-elementname="inputBar">
      <button class="searchBar__btn" data-elementname="searchBtn"></button>
      <div id="searchBarLayer" data-elementname="layer"></div>
    `;

    this.setTemplate(template);
  }

  setSearchHistoryNode(searchHistory) {
    const searchHistoryTemplate = searchHistory
      .map((history) => {
        return `
            <div class="listItem historyList">
                <span>${history.text}</span>
                <img class="historyRemove" data-historyId="${history.id}" src="./src/assets/close.svg">
            </div>
        `;
      })
      .join();
    this.layer.setTemplate(searchHistoryTemplate);
  }

  setRecommendKeywordsNode(recommendKeywords) {
    const keywordTemplate = recommendKeywords
      .map((keywordObj) => {
        return `
            <div class="listItem keywordList">
                <img src="./src/assets/arrow-top-right.svg">
                <span>${keywordObj.text}</span>
            </div>`;
      })
      .join();
    this.layer.setTemplate(keywordTemplate);
  }
}
