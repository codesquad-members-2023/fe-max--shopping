import { Base } from "../../Base.js";
import { SearchBarLayer } from "./SearchBarLayer.js";

export class SearchBar extends Base {
  constructor() {
    super("form");
    this.layer = new SearchBarLayer();
    this.init();
  }

  init() {
    this.setAttribute("id", "searchBar");
    this.addChild();
    this.setChildren(this.layer);
    this.setSearchBarEvent();
  }

  addChild() {
    const template = `
      <input class="inputBar" placeholder="검색 Amazon" data-elementname="inputBar">
      <button class="searchBar__btn"></button>
    `;

    this.setTemplate(template);
  }

  keydownEventHandler(e) {
    if (e.key === "ArrowUp" || e.key === "ArrowDown") {
      e.preventDefault();

      this.setSelectList(e.key);
    }
  }

  setSelectList(key) {
    const layer = this.layer;
    if (layer.selectInedx === null) {
      layer.selectInedx = key === "ArrowUp" ? layer.maxIndex : 0;
    } else {
      layer.keywordNodes[layer.selectInedx].classList.remove("selected");
      layer.selectInedx += key === "ArrowUp" ? -1 : 1;

      if (layer.selectInedx < 0) {
        layer.selectInedx = layer.maxIndex;
      } else if (layer.selectInedx > layer.maxIndex) {
        layer.selectInedx = 0;
      }
    }

    layer.keywordNodes[layer.selectInedx].classList.add("selected");
    this.inputBar.node.value = layer.keywordList[layer.selectInedx];
  }

  setSearchBarEvent() {
    this.inputBar.setEvent("focus", this.layer.show.bind(this.layer));
    this.inputBar.setEvent("blur", this.layer.hide.bind(this.layer));
    this.inputBar.setEvent("keydown", this.keydownEventHandler.bind(this));
  }
}
