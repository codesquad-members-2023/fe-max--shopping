import { DB } from "../../../db/db.js";
import { Backdrop } from "../../Backdrop.js";
import { Base } from "../../Base.js";

export class SearchBarLayer extends Base {
  constructor(observer, inputBar) {
    super("div");
    this.observer = observer;
    this.inputBar = inputBar;
    this.db = new DB();
    this.recommendKeywords = [];
    this.searchHistory = [];
    this.keywordList = [];
    this.keywordNodes = [];
    this.maxIndex = 0;
    this.selectIndex = -1;
    this.init();
  }

  async init() {
    this.setAttribute("id", "SearchBarLayer");
    this.observer.register(this);
    await this.setLayerContent();
  }

  async setLayerContent() {
    this.recommendKeywords = await this.db.getRecommend();
    this.searchHistory = await this.db.getSearchHistory();
  }

  async show(inputBar) {
    const inputText = inputBar.node.value;

    this.setStyle("display", "flex");
    Backdrop.show();
    this.observer.notify(this);
    if (inputText === "") {
      await this.setLayerContent();
      this.setLayerContent();
      this.clearChild();
      this.setNormalLayer();
      return;
    }
    await this.setAutoCompleteLayer(inputText);
  }

  hide() {
    this.setStyle("display", "none");
    Backdrop.hide();
    this.inputBar.node.blur();
    this.clearChild();
    this.selectIndex = -1;
    if (this.selectIndex !== -1) {
      this.keywordNodes[this.selectIndex].classList.remove("selected");
    }
  }

  setNormalLayer() {
    this.setSearchHistoryNode();
    this.setRecommendKeywordsNode();
    this.keywordNodes = this.node.childNodes;
    this.keywordNodes.forEach((node, index) => {
      node.dataset["layerindex"] = index;
    });
    this.keywordList = this.searchHistory
      .map((history) => history.text)
      .concat(this.recommendKeywords.map((keyword) => keyword.text));
    this.maxIndex = this.keywordList.length - 1;
  }

  async setAutoCompleteLayer(inputText) {
    const autoComplete = await this.db.getAutoComplete(inputText);

    if (autoComplete === []) {
      return;
    }

    const autoCompletTemplate = autoComplete
      .map((keywordObj) => {
        return `
          <div class="listItem autoCompletList">
            ${highlightText(keywordObj.text, inputText)}
          </div>`;
      })
      .join();

    this.clearChild();
    this.setTemplate(autoCompletTemplate);
    this.keywordNodes = this.node.childNodes;
    this.keywordNodes.forEach((node, index) => {
      node.dataset["layerindex"] = index;
    });
    this.keywordList = autoComplete.map((e) => e.text);
    this.selectIndex = -1;
    this.maxIndex = this.keywordNodes.length - 1;
  }

  setSelectList(key, inputBar) {
    if (this.selectIndex === -1) {
      this.selectIndex = key === "ArrowUp" ? this.maxIndex : 0;
    } else {
      this.keywordNodes[this.selectIndex].classList.remove("selected");
      this.selectIndex += key === "ArrowUp" ? -1 : 1;

      if (this.selectIndex < 0) {
        this.selectIndex = this.maxIndex;
      } else if (this.selectIndex > this.maxIndex) {
        this.selectIndex = 0;
      }
    }

    this.keywordNodes[this.selectIndex].classList.add("selected");
    inputBar.node.value = this.keywordList[this.selectIndex];
  }

  setRecommendKeywordsNode() {
    const keywords = this.recommendKeywords;
    const keywordTemplate = keywords
      .map((keywordObj) => {
        return `
            <div class="listItem keywordList">
                <img src="./src/assets/arrow-top-right.svg">
                <span>${keywordObj.text}</span>
            </div>`;
      })
      .join();
    this.setTemplate(keywordTemplate);
  }

  setSearchHistoryNode() {
    const searchHistory = this.searchHistory;
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
    this.setTemplate(searchHistoryTemplate);
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
