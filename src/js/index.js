import { initModal } from '../js/events/initModal.js';
import { initHeroSlide } from '../js/events/initHeroSlide.js';


import { SearchBar } from "../js/events/searchBarTemp/SearchBarTemp.js";
import { SearchPanelView } from "./events/searchBarTemp/SearchPanelView.js";
import { SearchBarView } from "../js/events/searchBarTemp/SearchBarView.js";
import { SearchBarModel } from "./events/searchBarTemp/SearchBarModel.js";

import { SideBar, SideBarView } from "../js/events/sideBarTemp/SideBarTemp.js";
import { SideBarModel } from "../js/events/sideBarTemp/SideBarModel.js";

const init = async () => {
  initHeroSlide();

  const searchBarModel = new SearchBarModel();
  const searchBarView = new SearchBarView();
  const searchPanelView = new SearchPanelView();
  const searchBar = new SearchBar(searchBarModel, searchBarView, searchPanelView);
  searchBar.init()

  const sideBarModel = new SideBarModel();
  const sideBarview = new SideBarView();
  const sideBar = new SideBar(sideBarModel, sideBarview);
  sideBar.init()

  await initModal();
};
init();
