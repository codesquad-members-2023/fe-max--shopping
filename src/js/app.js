// import { Modal } from './components/modal.js';
// import { heroController } from './components/hero.js';
// import { SearchKeyword } from './components/search-bar.js';

// const app = () => {
//   const modal = new Modal();
//   const searchKeyword = new SearchKeyword();
//   heroController();
//   modal.eventHandler();
//   searchKeyword.eventHandler();
// };

// app();

import { Sidebar } from './components/Sidebar/Sidebar.js';
import { Searchbar } from './components/NavBar/NavMain/Searchbar.js';
import { SearchLayer } from './components/NavBar/NavMain/SearchLayer.js';
import { $ } from './utils.js';

class App {
  constructor() {
    const sidebar = $('.side-bar__contents');
    const searchbar = $('.nav-main__search');

    const SIDEBAR_URL = 'http://localhost:3000/side-bar';
    const SEARCHBAR_URL = 'http://localhost:3000/search-bar';

    new Sidebar(sidebar, SIDEBAR_URL);
    new Searchbar(searchbar, SEARCHBAR_URL);
    new SearchLayer(searchbar, SEARCHBAR_URL);
  }
}

new App();
