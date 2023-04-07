import { $, addHiddenClass, removeHiddenClass, addDimmedClass, removeDimmedClass } from '../utils.js';

const modalController = () => {
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
  addDimmedClass('main');
};

const removeLargeLoginModal = () => {
  addHiddenClass('login-modal__large');
  removeDimmedClass('main');
};

const showLocationModal = () => {
  removeHiddenClass('location-modal');
  addDimmedClass('main');
};

const removeLocationModal = () => {
  addHiddenClass('location-modal');
  removeDimmedClass('main');
};

export default modalController;
