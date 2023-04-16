import { Component } from '../../../base/Component.js';

export default class SearchBar extends Component {
  constructor() {
    super('search-bar', 'FORM');
    this.node.setAttribute('autocomplete', 'off');
    this.init();
  }

  clearInputValue() {
    this.$('input').value = '';
  }

  setInputValue(value) {
    this.$('input').value = value;
  }

  getInputValue() {
    return this.$('input').value;
  }

  getTemplate() {
    return `
<input type="search" name="search" placeholder="검색 Amazon" />
<button type="submit" class="submit-btn"></button>
    `;
  }
}
