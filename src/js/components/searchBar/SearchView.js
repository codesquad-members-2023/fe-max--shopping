import { $ } from "../../utils/domUtils.js";
import { SearchBoxView } from "./SearchBoxView.js";
import { SearchDropDownView } from "./SearchDropdownView.js";

export class SearchView {
  constructor() {
    this.searchBar = $('.nav-bar__search');
    this.searchBox = new SearchBoxView();
    this.dropdown = new SearchDropDownView();

  }

  render() {
    this.searchBar.innerHTML = '';
    this.searchBar.append(this.searchBox.getElement(), this.dropdown.getElement());
  }

  get inputBox() {
    return this.searchBox.getInputBox();
  }

  updateView(...suggestions) {
    this.dropdown.setElement(...suggestions);
    this.render();
  }
}