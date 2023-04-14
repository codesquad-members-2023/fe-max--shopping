import { Model } from './searchBarModel.js';
import { View } from './searchBarView.js';
import { SearchBar } from './searchBar.js';

class SearchBarInit {
  constructor() {
    this.model = new Model();
    this.view = new View();
    this.searchBar = new SearchBar(this.model, this.view);
  }
}

const searchBarInit = new SearchBarInit();
