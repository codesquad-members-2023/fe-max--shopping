import { SideBarInit } from './sidebar/sideBarInit.js';
import { SearchBarInit } from './searchbar/searchBarInit.js';
import { initHeroSlides } from './hero.js';
import { initNavLayer } from './layer.js';

function init() {
  initNavLayer();
  initHeroSlides();
  const sideBarInit = new SideBarInit();
  const searchBarInit = new SearchBarInit();
}

init();
