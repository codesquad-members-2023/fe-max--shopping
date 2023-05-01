import { initLoginModal } from './components/modal.js';
import { initHero } from './components/hero/index.js';
import { initSearchBar } from './components/searchBar/index.js';

const init = () => {
  initLoginModal();
  initHero();
  initSearchBar();
};

init();
