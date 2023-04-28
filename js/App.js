import { Fetcher } from './Core/Fetcher.js';
import { SearchModel } from './Header/SearchBar/SearchModel.js';
import { SearchController } from './Header/SearchBar/SearchController.js';
import { SearchBar } from './Header/SearchBar/SearchBar.js';
import { SearchLayer } from './Header/SearchBar/SearchLayer.js';

export class App {
  constructor() {
    const fetcher = new Fetcher();
    const searchModel = new SearchModel();
    const searchController = new SearchController(searchModel, fetcher);
    const searchBarView = new SearchBar(document.querySelector('.search-bar'), searchController);
    const searchLayerView = new SearchLayer(document.querySelector('.search-bar__layer'), searchController);
  }
}
