import { SearchBar } from './components/searchBar/SearchBar.js';
import { initLoginModal } from './components/modal.js';
import { initHero } from './components/hero.js';

const init = () => {
  const url = 'http://localhost:3000/'
  const searchBar = new SearchBar();
  initLoginModal();
  initHero();
};

init();
