import { $, addHiddenClass, removeHiddenClass, addDimmedClass, removeDimmedClass } from '../utils.js';

const searchBarController = () => {
  $('.search-bar').addEventListener('focus', focusSearchBar);
  $('.search-bar').addEventListener('focusout', focusoutSearchBar);
  $('.search-btn').addEventListener('click', onClickSearchBtn);
};

const focusSearchBar = () => {
  renderKeywords();
  addDimmedClass('main');
  addHiddenClass('login-modal__small');
  removeHiddenClass('search-info');
};

const focusoutSearchBar = () => {
  removeDimmedClass('main');
  addHiddenClass('search-info');
};

const renderKeywords = () => {};

const onClickSearchBtn = event => {
  event.preventDefault();
  saveRecentKeyword();
};

const saveRecentKeyword = () => {
  const listOfRecentKeyword = [];
  const RecentKeyword = $('.search-bar').value;
  $('.search-bar').value = '';
  listOfRecentKeyword.push(RecentKeyword);
  localStorage.setItem('searchedWords', `${listOfRecentKeyword}`);
};

export default searchBarController;
