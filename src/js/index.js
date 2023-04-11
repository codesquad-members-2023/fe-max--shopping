import { initModal } from '../js/events/initModal.js';
import { initHeroSlide } from '../js/events/initHeroSlide.js';
// import { loadProducts } from '../js/events/getProducts.js';
// import { initContents } from '../js/events/initContents.js';

const init = () => {
  initModal();
  initHeroSlide();

  // loadProducts();
  // initContents();
};
init();
