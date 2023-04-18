import { initModal } from '../js/events/initModal.js';
import { initHeroSlide } from '../js/events/initHeroSlide.js';
import { SearchBar } from '../js/events/search/SearchBar.js';
import { SideBar } from '../js/events/sideBar/SideBar.js';

const init = async () => {
  initHeroSlide();
  const searchBar = new SearchBar();
  searchBar.initSearchBar();
  const sideBar = new SideBar();
  sideBar.initSideBar();
  await initModal();
};
init();
