import { Base } from "../../Base.js";

export class SearchBar extends Base {
  constructor() {
    super("form");
    this.setAttribute("id", "searchBar");

    const inputBar = new Base("input");
    inputBar.setAttribute("class", "inputBar");
    inputBar.setAttribute("placeholder", "검색 Amazon");

    const searchBtn = new Base("button");
    searchBtn.setAttribute("class", "searchBar__btn");
    // searchBtn.setTextContent("button");

    this.setChildren(inputBar, searchBtn);
  }
}
