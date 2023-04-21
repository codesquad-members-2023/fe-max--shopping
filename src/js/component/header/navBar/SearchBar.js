import { DB } from "../../../db/db.js";
import { Base } from "../../Base.js";
import { SearchBarLayer } from "./SearchBarLayer.js";

export class SearchBar extends Base {
  constructor(observer) {
    super("div");
    this.observer = observer;
    this.db = new DB();
    this.prevInputText = "";
    this.init();
  }

  init() {
    this.setAttribute("id", "searchBar");
    this.addChild();
    this.layer = new SearchBarLayer(this.observer, this.inputBar);
    this.setChildren(this.layer);
    this.setSearchBarEvent();
  }

  addChild() {
    const template = `
      <input class="inputBar" placeholder="검색 Amazon" data-elementname="inputBar">
      <button class="searchBar__btn" data-elementname="searchBtn"></button>
    `;

    this.setTemplate(template);
  }

  setSearchBarEvent() {
    this.setEvent("mousedown", (event) => {
      const isNotInputBar = event.target !== this.inputBar.node;
      if (isNotInputBar) {
        event.preventDefault();
      }
    });

    this.inputBar.setEvent(
      "focus",
      this.layer.show.bind(this.layer, this.inputBar)
    );
    this.inputBar.setEvent("blur", this.layer.hide.bind(this.layer));
    this.inputBar.setEvent("keyup", this.keydownEventHandler.bind(this));
    this.inputBar.setEvent("input", this.inputEventHandler.bind(this));

    this.searchBtn.setEvent("click", this.keywordSearch);
    this.setLayerEvent();
  }

  layerClickEvent(event) {
    event.preventDefault();

    const isHistoryRemoveBtn = event.target.classList.contains("historyRemove");
    if (isHistoryRemoveBtn) {
      const id = event.target.dataset.historyid;
      this.db.removeSearchHistory(id);
      return;
    }

    const listItem = event.target.closest(".listItem");
    const isListItem = listItem !== null;
    if (isListItem) {
      const selectIndex = listItem.dataset.layerindex;
      this.inputBar.node.value = this.layer.keywordList[selectIndex];
      this.keywordSearch();
    }
  }

  setLayerEvent() {
    this.setEvent("click", this.layerClickEvent.bind(this));
  }

  keywordSearch() {
    const inputText = this.inputBar.node.value;
    if (inputText !== "") {
      this.db.savesSearchHistory(inputText);
    }
  }

  async keydownEventHandler(event) {
    if (event.key === "ArrowUp" || event.key === "ArrowDown") {
      event.preventDefault();

      this.layer.setSelectList(event.key, this.inputBar);
      return;
    }

    if (event.key === "Enter") {
      this.keywordSearch();
    }
  }

  async inputEventHandler(e) {
    const inputText = this.inputBar.node.value;
    this.layer.selectInedx = -1;

    if (this.layer.selectInedx !== -1) {
      return;
    }

    this.layer.show(this.inputBar);
  }
}
