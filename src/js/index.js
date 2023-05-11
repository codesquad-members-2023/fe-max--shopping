import { initLoginModal } from './components/modal.js';
import { initHero } from './components/hero/index.js';
import { initSearchBar } from './components/searchBar/index.js';
import { initSideBar } from './components/sideBar/index.js';

const init = () => {
  initLoginModal();
  initHero();
  initSearchBar();
  initSideBar()
};

init();
