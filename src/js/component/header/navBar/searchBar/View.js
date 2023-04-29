import { Backdrop } from "../../../Backdrop.js";
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

  render(rendData) {
    this.layer.setStyle("display", "flex");
    Backdrop.show();
    switch (rendData.type) {
      case "normal":
        this.setSearchHistoryNode(rendData.searchHistory);
        this.setRecommendKeywordsNode(rendData.recommendKeywords);
        break;
      case "autoComplet":
        this.setAutoCompletNode(rendData.autoComplete, rendData.inputText);
        break;
    }
  }

  closeLayer() {
    this.layer.setStyle("display", "none");
    Backdrop.hide();
    this.inputBar.node.blur();
    this.layer.clearChild();
  }

  setAutoCompletNode(autoComplete, inputText) {
    const autoCompletTemplate = autoComplete
      .map((keywordObj) => {
        return `
          <div class="listItem autoCompletList">
            ${highlightText(keywordObj.text, inputText)}
          </div>`;
      })
      .join();

    this.layer.clearChild();
    this.layer.setTemplate(autoCompletTemplate);
  }

  setSearchHistoryNode(searchHistory) {
    this.layer.clearChild();
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

function highlightText(str, keyword) {
  const regex = new RegExp(`(${keyword})+`, "g");
  const matches = str.match(regex);
  if (!matches) {
    return str;
  }

  let highlightedStr = "";
  let lastIndex = 0;

  for (const match of matches) {
    const index = str.indexOf(match, lastIndex);
    const nonMatchStr = str.slice(lastIndex, index);
    if (nonMatchStr) {
      highlightedStr += `<span>${nonMatchStr}</span>`;
    }
    highlightedStr += `<span class="highlight">${match}</span>`;
    lastIndex = index + match.length;
  }

  const remainingStr = str.slice(lastIndex);
  if (remainingStr) {
    highlightedStr += `<span>${remainingStr}</span>`;
  }

  return highlightedStr;
}
