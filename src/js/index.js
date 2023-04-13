import { initModal } from '../js/events/initModal.js';
import { initHeroSlide } from '../js/events/initHeroSlide.js';
import { initSearchBar } from '../js/events/initSearchBar.js';
import { SearchBar } from '../js/events/SearchBar.js';
// import { loadProducts } from '../js/events/getProducts.js';
// import { initContents } from '../js/events/initContents.js';

const init = () => {
  initModal();
  initHeroSlide();
  // initSearchBar();

  // loadProducts();
  // initContents();
  // const parentNode = new ParentNode();
  const searchBar = new SearchBar();
  searchBar.initSearchBar();
};
init();
