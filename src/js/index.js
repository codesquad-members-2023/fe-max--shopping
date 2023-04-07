import { initLoginModal } from '../js/events/initLoginModal.js';
import { initShippingModal } from '../js/events/initShippingModal.js';
// import { initHeroSlide, initLoop } from "../js/events/initHeroSlide.js";
import { startSlide, slideshowControls, initSlideShow } from '../js/events/hero4.js';
import { loadProducts } from '../js/events/getProducts.js';
import { initContents } from '../js/events/initContents.js';

const init = () => {
  initLoginModal();
  initShippingModal();
  //   startSlide(); // hero3
  startSlide(); // hero4
  initSlideShow()
  slideshowControls()
  
  loadProducts();
  initContents();
};
init();
