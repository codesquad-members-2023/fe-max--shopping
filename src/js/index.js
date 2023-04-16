import { initModal } from '../js/events/initModal.js';
import { initHeroSlide } from '../js/events/initHeroSlide.js';
import { SearchBar } from '../js/events/search/SearchBar.js';

const init = async () => {
  initHeroSlide();
  const searchBar = new SearchBar();
  searchBar.initSearchBar();
  await initModal();
};
init();
