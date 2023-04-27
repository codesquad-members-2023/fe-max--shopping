import { initLoginModal } from './components/modal.js';
import { initHero } from './components/hero/index.js';
import { SearchBar } from './components/searchBar/SearchBar.js';
import { SideBarContainer } from './components/sideBar/SideBarContainer.js';
import { $ } from './utils/domUtils.js';
import { initSearchBar } from './components/searchBar/index.js';

const init = () => {
  initLoginModal();
  initHero();
  // const searchBar = new SearchBar();
  // const sideBarContainer = new SideBarContainer($('aside'));
  initSearchBar();
};

init();
