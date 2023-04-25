import { Store } from './Model/Store.js';
import { SearchController } from './Controller/SearchController.js';
import { SearchForm } from './View/SearchForm.js';

export class App {
  constructor() {
    const model = new Store();
    const controller = new SearchController(model);
    const searchView = new SearchForm(document.querySelector('.search-bar'), controller);
  }
}
