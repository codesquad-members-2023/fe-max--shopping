import { initLoginModal } from '../js/events/initLoginModal.js';
import { initShippingModal } from '../js/events/initShippingModal.js';
import { startSlide, slideshowControls, initSlideShow } from '../js/events/inithero.js';
import { loadProducts } from '../js/events/getProducts.js';
import { initContents } from '../js/events/initContents.js';

const init = () => {
  initLoginModal();
  initShippingModal();
  startSlide();
  initSlideShow()
  slideshowControls()
  
  loadProducts();
  initContents();
};
init();
