import { initModal } from '../js/events/initModal.js';
import { initHeroSlide } from '../js/events/initHeroSlide.js';
// import { SearchBar } from '../js/events/search/SearchBar.js';
import { SideBar } from '../js/events/sideBar/SideBar.js';


// import { TSearchBar,Model } from './events/searchBarTemp/TSearchBar.js';
import { SearchBarView,SearchBarModel, SearchBar} from "./events/searchBarTemp/SearchBarTemp.js";

// import {
//   TSideBar,
//   Model,
//   View,
// } from '../js/events/sideBarViewStoreTemp/TView1.js';
import { URL } from './constants/path.js';

const init = async () => {
  initHeroSlide();
  // const searchBar = new SearchBar();
  // searchBar.initSearchBar();

  const model = new SearchBarModel();
  const view = new SearchBarView();
  const searchBar = new SearchBar(model, view);
  searchBar.init()


  const sideBar = new SideBar();
  sideBar.initSideBar();


  /* 추후 개발을 위해 주석 */
  // const model = new Model(URL.jsonBase);
  // const view = new View();
  // const tsideBar = new TSideBar(model, view);
  // tsideBar.init()

  await initModal();
};
init();
