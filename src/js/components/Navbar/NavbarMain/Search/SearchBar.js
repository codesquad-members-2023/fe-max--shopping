import { Component } from '../../../base/Component.js';

export default class SearchBar extends Component {
  constructor() {
    super('search-bar', 'FORM');
    this.node.setAttribute('autocomplete', 'off');
    this.init();
    // this.searchInput = this.$('input');
  }

  clearInputValue() {
    this.searchInput.value = '';
  }

  setInputValue(value) {
    this.searchInput.value = value;
  }

  getTemplate() {
    return `
<input type="search" name="search" placeholder="검색 Amazon" />
<button type="submit" class="submit-btn"></button>
    `;
  }
}
