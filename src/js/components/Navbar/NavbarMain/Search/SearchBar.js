import { Component } from '../../../base/Component.js';

export default class SearchBar extends Component {
  constructor() {
    super('search-bar', 'FORM');
  }

  getTemplate() {
    return `
<input type="search" class="input" placeholder="검색 Amazon" />
<button type="submit" class="submit-btn"></button>
    `;
  }
}
