import { modalController } from './components/modal.js';
import { heroController } from './components/hero.js';
import { searchKeywordController } from './components/search-bar.js';

const app = () => {
  modalController();
  heroController();
  searchKeywordController();
};

app();
