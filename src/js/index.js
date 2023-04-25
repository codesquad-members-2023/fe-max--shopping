import { initLoginModal } from './components/modal.js';
// import { initHero } from './components/hero.js';
import { initHero } from './components/hero/hero.js';
import { SearchBar } from './components/searchBar/SearchBar.js';
import { SideBarContainer } from './components/sideBar/SideBarContainer.js';
import { $ } from './utils/domUtils.js';

const init = () => {
  initLoginModal();
  initHero();
  const searchBar = new SearchBar();
  const sideBarContainer = new SideBarContainer($('aside'));
};

init();
