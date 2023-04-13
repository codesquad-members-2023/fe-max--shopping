import { SearchBar } from './components/searchBar/SearchBar.js';
import { initLoginModal } from './components/modal.js';
import { initHero } from './components/hero.js';
import { DataManager } from './utils/DataManager.js';

const init = () => {
  const url = 'http://localhost:3000/'
  const dataManager = new DataManager(url);
  const searchBar = new SearchBar(dataManager);
  initLoginModal();
  initHero();
};

init();
