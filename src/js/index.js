import { initModal } from '../js/events/initModal.js';
import { initHeroSlide } from '../js/events/initHeroSlide.js';
import { initSearchBar } from '../js/events/initSearchBar.js';
import { SearchBar } from '../js/events/search/SearchBar.js';

const init = () => {
  initModal();
  initHeroSlide();
  const searchBar = new SearchBar();
  searchBar.initSearchBar();
};
init();
