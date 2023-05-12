import { App } from './App.js';
import { initHeader } from './Header/modal.js';
import { initSideBar } from './SideBar/sidebar.js';

function init() {
  new App();
  initHeader();
  initSideBar();
}

init();
