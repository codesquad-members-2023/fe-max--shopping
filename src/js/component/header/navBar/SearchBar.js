import { Base } from "../../Base.js";

export class SearchBar extends Base {
  constructor() {
    super("form");
    this.init();
  }

  init() {
    this.setAttribute("id", "searchBar");
    this.addChild();
  }
  addChild() {
    const template = `
      <input class="inputBar" placeholder="검색 Amazon">
      <button class="searchBar__btn"></button>
    `;

    this.setTemplate(template);
  }
}
