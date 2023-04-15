import { $, addHiddenClass, removeHiddenClass, addDimmed, removeDimmed } from '../utils.js';

let recommended = [
  'egift cards for amazon gift card',
  'marvel legends',
  'gift cards',
  'reload gift card',
  'amazon reload',
  '기프트카드',
  'scorpions cd',
  'reload',
  'blue note tone poet vinyl',
  'balance reload',
];
let history = [];
let autoKeyword = [
  'a34',
  'among',
  'ai',
  'adhd',
  'asl',
  'apc',
  'ap위성',
  'ap alchemy',
  'ap시스템',
  'apc',
  'ap투자연구소',
  'april',
  'apple',
  'apply',
  'apr',
  'ap몰',
];
const MAX_SIZE_OF_RECENT = 5;

export const searchKeywordController = () => {
  renderRecommendedKeywords(recommended);
  $('.search-bar').addEventListener('focus', focusSearchBar);
  $('.search-info').addEventListener('click', onClickEvent);
  $('.nav-main__search').addEventListener('submit', submitSearchBar);
  $('.nav-main__search').addEventListener('blur', focusoutSearchBar);
  $('.search-bar').addEventListener('keyup', displayAutocomplete);
};

const focusSearchBar = () => {
  addDimmed();
  addHiddenClass('login-modal__small');
  removeHiddenClass('search-info');
};

const focusoutSearchBar = () => {
  removeDimmed();
  addHiddenClass('search-info');
};

const submitSearchBar = event => {
  event.preventDefault();
  removeAll('history');
  saveHistory();
  renderHistoryKeywords();
  $('.search-bar').blur();
};

const removeAll = category => {
  const allOfList = document.querySelectorAll(`.search-info__${category}`);
  if (allOfList !== null) {
    allOfList.forEach(category => category.remove());
  }
};

const saveHistory = () => {
  const historyKeyword = $('.search-bar').value;
  $('.search-bar').value = '';
  if (historyKeyword === '') return;
  if (history.includes(historyKeyword)) history = history.filter(keyword => keyword !== historyKeyword);
  if (history.length === MAX_SIZE_OF_RECENT) history.shift();
  history.push(historyKeyword);
};

const renderHistoryKeywords = () => {
  if (history === '[]') return;
  history.forEach(keyword => renderKeyword('history', keyword));
};

const renderRecommendedKeywords = () => {
  recommended.forEach(keyword => renderKeyword('recommended', keyword));
};

const renderKeyword = (category, keyword) => {
  if (category === 'history') {
    const historyTemplate = `
      <li class="search-info__history">
        <a href="#">${keyword}</a>
        <img class="delete-btn" src="./src/asset/icons/close.svg" alt="">
      </li>`;
    $('.search-info').insertAdjacentHTML('afterbegin', historyTemplate);
  }
  if (category === 'recommended') {
    const recommendedTemplate = `
      <li class="search-info__recommended">
        <img class="keyword-btn" src="./src/asset/icons/arrow-top-right.svg" alt="">
        <a href="#">${keyword}</a>
      </li>`;
    $('.search-info').insertAdjacentHTML('beforeend', recommendedTemplate);
  }
  if (category === 'autocomplete') {
    const autocompleteTemplate = `
      <li class="search-info__autocomplete">
        <a href="#">${keyword}</a>
      </li>`;
    $('.search-info').insertAdjacentHTML('afterbegin', autocompleteTemplate);
  }
};

const onClickEvent = event => {
  event.preventDefault();
  const clickedNode = event.target;
  switch (clickedNode.className) {
    case 'delete-btn':
      const historyValue = clickedNode.previousElementSibling.innerText;
      history = history.filter(keyword => keyword !== historyValue);
      clickedNode.parentNode.remove();
      break;
    case 'keyword-btn':
      const keywordValue = clickedNode.nextElementSibling.innerText;
      $('.search-bar').value = `${keywordValue}`;
      addHiddenClass('search-info');
      break;
  }
};

const displayAutocomplete = () => {
  if ($('.search-bar').value === '') removeAll('autocomplete');
  removeAll('autocomplete');
  matchKeyword().forEach(keyword => renderKeyword('autocomplete', keyword));
};

const matchKeyword = () => {
  return autoKeyword.filter(keyword => {
    const regex = new RegExp($('.search-bar').value, 'gi');
    return keyword.match(regex);
  });
};
