import { Component } from '../Core/Component.js';
// import { debounce } from './utility.js';

export class SearchLayer extends Component {
  init() {
    this.controller
      .fetchData('searchDB') //
      .then((searchData) => {
        this.state = searchData;
        this.render();
      });
  }

  template() {
    const { searchHistory, suggestion } = this.state;

    return `<ul class="search-bar__result-container">
              ${searchHistory
                .map(
                  (item) =>
                    `<li class="search-bar__result history" data-index="${item.id}">
                      <a href="#">${item.content}</a>
                      <button>
                        <img src="./assets/icons/close.svg" alt="" />
                      </button>  
                    </li>`,
                )
                .join('')} 
              ${suggestion
                .map(
                  (item) =>
                    `<li class="search-bar__result suggestion" data-index="${item.id}">
                      <img src="./assets/icons/arrow-top-right.svg" alt="" />
                      <a href="#">${item.content}</a>
                    </li>`,
                )
                .join('')}
            </ul>`;
  }

  inputEventHandler = () => {
    const $searchbarInput = document.querySelector('.search-bar__input');
    const inputValue = $searchbarInput.value;

    if (inputValue === '') {
      this.render();
      return;
    }
    this.getData('autoSuggestions').then((autoSuggestionData) => {
      this.renderAutoSuggestion(autoSuggestionData, inputValue);
    });
  };

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

    $searchForm.addEventListener('submit', this.controller.submitHandler);

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
