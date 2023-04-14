import { Searchbar } from './Searchbar.js';

export class App {
  constructor() {
    const $searchBar = document.querySelector('.search-bar');
    new Searchbar($searchBar);
  }
}
