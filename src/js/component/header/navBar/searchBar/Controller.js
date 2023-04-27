import { Backdrop } from "../../../Backdrop.js";

export class Controller {
  constructor(model, view, observer) {
    this.model = model;
    this.view = view;
    this.observer = observer;

    this.init();
  }

  init() {
    this.setSearchBarEvent();
    this.observer.register(this);
  }

  setSearchBarEvent() {
    const inputBar = this.view.inputBar;
    inputBar.setEvent("focus", this.show.bind(this));
    inputBar.setEvent("blur", this.hide.bind(this));
    inputBar.setEvent("keyup", this.keydownEventHandler.bind(this));
    inputBar.setEvent("input", this.inputEventHandler.bind(this));

    this.view.searchBtn.setEvent("click", this.keywordSearch.bind(this));
    this.view.layer.setEvent("mousedown", this.layerClickEvent.bind(this));
  }

  async show() {
    const view = this.view;
    const model = this.model;
    const inputText = view.inputBar.node.value;

    view.layer.setStyle("display", "flex");
    Backdrop.show();
    this.observer.notify(this);

    if (inputText === "") {
      await model.setLayerContent();
      const searchHistory = model.searchHistory;
      const recommendKeywords = model.recommendKeywords;
      view.layer.clearChild();
      this.setNormalLayer(searchHistory, recommendKeywords);
      return;
    }

    await this.setAutoCompleteLayer(inputText);
  }

  hide() {
    const view = this.view;
    const model = this.model;

    view.layer.setStyle("display", "none");
    Backdrop.hide();
    view.inputBar.node.blur();
    view.layer.clearChild();
    model.selectIndex = -1;
    if (model.selectIndex !== -1) {
      model.keywordNodes[model.selectIndex].classList.remove("selected");
    }
  }

  setNormalLayer(searchHistory, recommendKeywords) {
    const view = this.view;
    const model = this.model;

    view.setSearchHistoryNode(searchHistory);
    view.setRecommendKeywordsNode(recommendKeywords);

    model.keywordNodes = view.layer.node.childNodes;
    model.keywordNodes.forEach((node, index) => {
      node.dataset["layerindex"] = index;
    });
    model.keywordList = searchHistory
      .map((history) => history.text)
      .concat(recommendKeywords.map((keyword) => keyword.text));
    model.maxIndex = model.keywordList.length - 1;
  }

  keydownEventHandler(event) {
    if (event.key === "ArrowUp" || event.key === "ArrowDown") {
      event.preventDefault();

      this.setSelectList(event.key, this.view.inputBar);
      return;
    }

    if (event.key === "Enter") {
      this.keywordSearch();
    }
  }

  setSelectList(key, inputBar) {
    const model = this.model;

    if (model.selectIndex === -1) {
      model.selectIndex = key === "ArrowUp" ? model.maxIndex : 0;
    } else {
      model.keywordNodes[model.selectIndex].classList.remove("selected");
      model.selectIndex += key === "ArrowUp" ? -1 : 1;

      if (model.selectIndex < 0) {
        model.selectIndex = model.maxIndex;
      } else if (model.selectIndex > model.maxIndex) {
        model.selectIndex = 0;
      }
    }

    model.keywordNodes[model.selectIndex].classList.add("selected");
    inputBar.node.value = model.keywordList[model.selectIndex];
  }

  keywordSearch() {
    const inputText = this.view.inputBar.node.value;
    if (inputText !== "") {
      this.model.setSavesSearchHistory(inputText);
    }
    this.hide();
  }

  async setAutoCompleteLayer(inputText) {
    const view = this.view;
    const model = this.model;
    const autoComplete = await this.model.getAutoComplete(inputText);

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

    view.layer.clearChild();
    view.layer.setTemplate(autoCompletTemplate);
    model.keywordNodes = view.layer.node.childNodes;
    model.keywordNodes.forEach((node, index) => {
      node.dataset["layerindex"] = index;
    });
    model.keywordList = autoComplete.map((e) => e.text);
    model.selectIndex = -1;
    model.maxIndex = model.keywordNodes.length - 1;
  }

  inputEventHandler() {
    const model = this.model;
    model.selectInedx = -1;

    if (model.selectInedx !== -1) {
      return;
    }

    this.show();
  }

  layerClickEvent(event) {
    const target = event.target;
    event.preventDefault();

    const isHistoryRemoveBtn = target.classList.contains("historyRemove");
    if (isHistoryRemoveBtn) {
      const id = target.dataset.historyid;
      this.model.setRemoveSearchHistory(id);
      this.show();
      return;
    }

    const listItem = target.closest(".listItem");
    const isListItem = listItem !== null;
    if (isListItem) {
      const selectIndex = listItem.dataset.layerindex;
      this.view.inputBar.node.value = this.model.keywordList[selectIndex];
      this.keywordSearch();
    }
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
