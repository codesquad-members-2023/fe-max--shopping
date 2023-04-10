import { Component } from '../../../base/Component.js';
import SearchBar from './SearchBar.js';
import { SearchWord } from './SearchWord.js';

export default class Search extends Component {
  constructor() {
    super('search');
  }

  getTemplate() {
    const searchBar = new SearchBar();
    const searchWord = new SearchWord();
    return [searchBar.node, searchWord.node];
  }
}
