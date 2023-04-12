import {
  $,
  addHiddenClass,
  removeHiddenClass,
  addDimmedClass,
  removeDimmedClass,
  saveAtLocalStorage,
  loadAtLocalStorage,
} from '../utils.js';

export default class SearchBarController {
  #listOfRecentKeyword = [];
  #recommendedKeyword = [
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
  #MAX_SIZE_OF_RECENT = 5;

  init = () => {
    this.renderKeywordsList();
    this.renderRecommendedList();
    $('.search-bar').addEventListener('focus', this.focusSearchBar);
    $('.search-bar').addEventListener('focusout', this.focusoutSearchBar);
    $('.nav-main__search').addEventListener('submit', this.onClickSearchBtn);
    $('.search-info').addEventListener('click', this.clickKeywordBtn);
  };

  focusSearchBar = () => {
    addDimmedClass('main');
    addHiddenClass('login-modal__small');
    removeHiddenClass('search-info');
  };

  focusoutSearchBar = () => {
    removeDimmedClass('main');
    addHiddenClass('search-info');
  };

  onClickSearchBtn = event => {
    event.preventDefault();
    this.removeAllRecentKeywords();
    this.saveRecentKeyword();
    this.renderKeywordsList();
    $('.search-bar').blur();
  };

  renderKeywordsList = () => {
    if (window.localStorage.getItem('keyword') === null) return;
    const keywords = JSON.parse(window.localStorage.getItem('keyword'));
    keywords.forEach(keyword => this.renderList('recent', keyword));
  };

  renderRecommendedList = () => {
    this.#recommendedKeyword.forEach(keyword => this.renderList('recommended', keyword));
  };

  renderList = (category, keyword) => {
    if (category === 'recent') {
      const recentKeywordTemplate = `
      <li class="search-info__recent">
        <a href="#">${keyword}</a>
        <img class="remove-btn" src="./src/asset/icons/close.svg" alt="">
      </li>`;
      $('.search-info').insertAdjacentHTML('afterbegin', recentKeywordTemplate);
    }
    if (category === 'recommended') {
      const recommendedKeywordTemplate = `
      <li class="search-info__trending">
        <img class="keyword-btn" src="./src/asset/icons/arrow-top-right.svg" alt="">
        <a href="#">${keyword}</a>
      </li>`;
      $('.search-info').insertAdjacentHTML('beforeend', recommendedKeywordTemplate);
    }
  };

  saveRecentKeyword = () => {
    const recentKeyword = $('.search-bar').value;
    $('.search-bar').value = '';
    if (recentKeyword === '') return;
    if (this.#listOfRecentKeyword.includes(recentKeyword))
      this.#listOfRecentKeyword = this.#listOfRecentKeyword.filter(keyword => keyword !== recentKeyword);
    if (this.#listOfRecentKeyword.length === this.#MAX_SIZE_OF_RECENT) this.#listOfRecentKeyword.shift();
    this.#listOfRecentKeyword.push(recentKeyword);
    saveAtLocalStorage('keyword', `${JSON.stringify(this.#listOfRecentKeyword)}`);
  };

  removeAllRecentKeywords = () => {
    const allRecentKeywords = document.querySelectorAll('.search-info__recent');
    if (allRecentKeywords !== null) {
      allRecentKeywords.forEach(keyword => keyword.remove());
    }
  };

  clickKeywordBtn = event => {
    if (event.target.classList.contains('keyword-btn')) {
      const sibling = event.target.nextElementSibling;
      if (sibling.tagName === 'SPAN') {
        const valueOfKeyword = sibling.innerHTML;
        $('.search-bar').value = valueOfKeyword;
      }
    }
  };
}
