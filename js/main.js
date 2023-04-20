import { initHeader } from './modal.js';
import { initSlider } from './slider.js';
import { initSideBar } from './sidebar.js';
import { App } from './App.js';

function init() {
  initHeader();
  initSlider();
  initSideBar();
  new App();
}

init();
