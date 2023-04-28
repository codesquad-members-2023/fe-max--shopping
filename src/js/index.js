import { SearchBarInit } from './searchbar/searchBarInit.js';
import { initHeroSlides } from './hero.js';
import { initNavLayer } from './layer.js';

import { SideBarInit } from './sidebar/sideBarInit.js';
import { Data } from './sidebar/sideBarData.js';
import { Renderer } from './sidebar/renderer.js';
import { SideBar } from './sidebar/sideBar.js';

import { controller } from './re-searchbar/controller.js';

const SIDE_BAR_DATA_URL = 'http://localhost:4000/sidebarData';

function init() {
  initNavLayer();
  initHeroSlides();

  const searchBarInit = new SearchBarInit();

  controller.init();

  // 나중에 비교해보고 싶어서 남겨놨습니다.
  // const data = new Data(SIDE_BAR_DATA_URL);
  // const renderer = new Renderer();
  // const sideBar = new SideBar(data, renderer);
  // const sideBarInit = new SideBarInit(data, renderer, sideBar);
  // sideBarInit.sideBar.init();
}

init();
