import Fetcher from './util/Fetcher.js';
import { SearchModel } from './Header/SearchBar/SearchModel.js';
import { SearchController } from './Header/SearchBar/SearchController.js';
import { SearchBar } from './Header/SearchBar/SearchBar.js';
import { SearchLayer } from './Header/SearchBar/SearchLayer.js';

export class App {
  constructor() {
    const searchModel = new SearchModel();
    const searchBarView = new SearchBar(document.querySelector('.search-bar'));
    const searchLayerView = new SearchLayer(document.querySelector('.search-bar__layer'));
    const searchController = new SearchController(searchModel, searchBarView, searchLayerView, Fetcher);
  }
}
