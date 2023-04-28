import { Component } from '../../Core/Component.js';
// import { debounce } from './utility.js';

export class SearchLayer extends Component {
  constructor($target, controller) {
    super($target, controller);
    this.controller.model.registerObserver(this);
  }

  init() {
    this.controller
      .loadInitialData() //
      .then((searchData) => {
        this.render(searchData);
      });
  }

  template(searchData) {
    const { searchHistory, suggestion } = searchData;
    return `<ul class="search-bar__result-container">
              ${this.makeRecentHistoryTemplate(searchHistory)}
              ${this.makeTrendingSuggestionTemplate(suggestion)}
            </ul>`;
  }

  makeRecentHistoryTemplate(data) {
    const historyData = data.toReversed().slice(0, 5);
    return `${historyData
      .map(
        (item) =>
          `<li class="search-bar__result recentSearch">
            <a href="#">${item.content}</a>
            <button>
              <img src="./assets/icons/close.svg" alt="" />
            </button>  
          </li>`,
      )
      .join('')}`;
  }

  makeTrendingSuggestionTemplate(data) {
    return `${data
      .map(
        (item) =>
          `<li class="search-bar__result suggestion">
            <img src="./assets/icons/arrow-top-right.svg" alt="" />
            <a href="#">${item.content}</a>
          </li>`,
      )
      .join('')}`;
  }

  makeAutoSuggestionTemplate() {}

  updateLayer(model) {
    const { searchData } = model;
    this.render(searchData);
  }

  // inputEventHandler = () => {
  //   const $searchbarInput = document.querySelector('.search-bar__input');
  //   const inputValue = $searchbarInput.value;

  //   if (inputValue === '') {
  //     this.render();
  //     return;
  //   }
  //   this.getData('autoSuggestions').then((autoSuggestionData) => {
  //     this.renderAutoSuggestion(autoSuggestionData, inputValue);
  //   });
  // };

  // renderAutoSuggestion(data, prefix) {
  //   const resultList = document.querySelector('.search-bar__result-container');
  //   const regex = new RegExp(prefix, 'gi');
  //   const matchData = data.filter((item) => item.match(regex));
  //   const autoTemplate = `${matchData
  //     .map(
  //       (el, index) =>
  //         `<li class="search-bar__result autoSuggestion" data-index="${index}">
  //            <a href="#">${el}</a>
  //          </li>`,
  //     )
  //     .join('')}`;
  //   resultList.innerHTML = autoTemplate;
  // }

  setEvent() {
    const $searchForm = document.querySelector('.search-bar__form');
    // const $searchbarInput = document.querySelector('.search-bar__input');

    $searchForm.addEventListener('submit', this.controller);

    // $searchbarInput.addEventListener('input', debounce(this.inputEventHandler));
  }

  // submitHandler(e) {
  //   e.preventDefault();

  //   const { history } = this.searchDB;
  //   const recentSearchWord = $searchbarInput.value;
  //   history.unshift(recentSearchWord);
  //   this.searchDB.history = history.slice(0, 5);

  //   localStorage.setItem('searchHistory', JSON.stringify(this.searchDB.history));

  //   this.render();
  // }
}
