import { Fetcher } from './Core/Fetcher.js';
import { SearchModel } from './Model/SearchModel.js';
import { SearchController } from './Controller/SearchController.js';
import { SearchBar } from './View/SearchBar.js';
import { SearchLayer } from './View/SearchLayer.js';

export class App {
  constructor() {
    const fetcher = new Fetcher();
    const searchModel = new SearchModel();
    const searchController = new SearchController(searchModel, fetcher);
    const searchBarView = new SearchBar(document.querySelector('.search-bar'), searchController);
    const searchLayerView = new SearchLayer(document.querySelector('.search-bar__layer'), searchController);
  }
}
