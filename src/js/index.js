import { startSlide, slideshowControls, initSlideShow } from '../js/events/initheroSlide.js';
import { initModal } from '../js/events/initModal.js';
// import { loadProducts } from '../js/events/getProducts.js';
// import { initContents } from '../js/events/initContents.js';

const init = () => {
  initModal();
  startSlide();
  initSlideShow()
  slideshowControls()
  
  // loadProducts();
  // initContents();
};
init();
