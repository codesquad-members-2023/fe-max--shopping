import { SearchBar } from './components/searchBar/SearchBar.js';
import { initLoginModal } from './components/modal.js';
import { initHero } from './components/hero.js';

const init = () => {
  const searchBar = new SearchBar();
  initLoginModal();
  initHero();
};

init();
