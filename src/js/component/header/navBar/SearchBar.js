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
    this.createChild(
      "input",
      [
        { name: "class", value: "inputBar" },
        { name: "placeholder", value: "검색 Amazon" },
      ],
      null,
      "inputBar"
    );

    this.createChild(
      "button",
      [{ name: "class", value: "searchBar__btn" }],
      null,
      "searchBtn"
    );
  }
}
