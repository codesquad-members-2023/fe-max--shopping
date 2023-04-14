import { initHeader } from './modal.js';
import { initSlider } from './slider.js';
import { App } from './App.js';

function init() {
  initHeader();
  initSlider();
  new App();
}

init();
