import { Component } from '../../../base/Component.js';

export default class SearchBar extends Component {
  constructor(props) {
    super('search-bar', 'FORM');
    this.props = props;
    this.node.setAttribute('autocomplete', 'off');
    this.init();
  }

  initEventHandlers() {
    const { closeSearchPanel } = this.props;

    this.node.search.addEventListener('blur', () => {
      closeSearchPanel();
    });
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
