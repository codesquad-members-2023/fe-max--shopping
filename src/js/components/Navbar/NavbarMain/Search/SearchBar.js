import { Component } from '../../../base/Component.js';

export default class SearchBar extends Component {
  constructor() {
    super('search-bar', 'FORM');
    this.node.setAttribute('autocomplete', 'off');
    this.init();
  }

  clearInputValue() {
    this.node.search.value = '';
  }

  setInputValue(value) {
    this.node.search.value = value;
  }

  getTemplate() {
    return `
<input type="search" name="search" placeholder="검색 Amazon" />
<button type="submit" class="submit-btn"></button>
    `;
  }
}
