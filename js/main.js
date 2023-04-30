/* eslint-disable no-new */
import { initHeader } from './Header/modal.js';
import { initSlider } from './Hero/slider.js';
import { initSideBar } from './SideBar/sidebar.js';
import { App } from './App.js';

function init() {
  initHeader();
  initSlider();
  initSideBar();
  new App();
}

init();
