import modalController from './components/modal.js';
import heroController from './components/hero.js';
import SearchBarController from './components/search-bar.js';

const app = () => {
  const searchBarController = new SearchBarController();
  modalController();
  heroController();
  searchBarController.init();
};

app();
