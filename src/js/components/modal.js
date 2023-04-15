import { $, addHiddenClass, removeHiddenClass, addDimmed, removeDimmed } from '../utils.js';

export const modalController = () => {
  document.addEventListener('DOMContentLoaded', showSmallLoginModal);
  $('.login-wrap').addEventListener('mouseenter', showLargeLoginModal);
  $('.nav-main__login').addEventListener('mouseleave', removeLargeLoginModal);
  $('.nav-main__location').addEventListener('mouseenter', showLocationModal);
  $('.nav-main__location').addEventListener('mouseleave', removeLocationModal);
};

const showSmallLoginModal = () => {
  setTimeout(() => {
    removeHiddenClass('login-modal__small');
  }, 1000);
};

const showLargeLoginModal = () => {
  addHiddenClass('login-modal__small');
  removeHiddenClass('login-modal__large');
  addDimmed();
};

const removeLargeLoginModal = () => {
  addHiddenClass('login-modal__large');
  removeDimmed();
};

const showLocationModal = () => {
  removeHiddenClass('location-modal');
  addDimmed();
};

const removeLocationModal = () => {
  addHiddenClass('location-modal');
  removeDimmed();
};

export default modalController;
