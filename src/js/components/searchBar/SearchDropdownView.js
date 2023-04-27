import { $, createElement } from "../../utils/domUtils.js";

export class SearchDropDownView {
  constructor() {
    this.dropdown = createElement('div', {class: 'search-dropdown layer hidden'});
    this.suggestion = createElement('ul', {class: 'search-dropdown__suggestion'});

    this.init();
  }

  init() {
    this.dropdown.append(this.suggestion);
  }

  getElement() {
    return this.dropdown;
  }
}