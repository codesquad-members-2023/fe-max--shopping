import { $ } from '../../utils/dom.js';
import { APIClient, JSONClient } from '../api/api.js';
import { getRandomLetter } from '../../utils/pickPrefix.js';
import { PATH } from '../../constants/path.js';
import { SearchHistoryManager } from './SearchHistoryManagerTemp.js';
import { handleDimming, layerOpenState } from '../../utils/dim.js';
import { getInputValue } from '../../utils/getInputValue.js';
import { NUMBER } from '../../constants/number.js';

const searchPanel = $('.search-panel');
const searchBarInput = document.searchForm.searchBar;

export class SearchBarView {
  constructor() {}

  decideSuggestionsRendering(suggestionTemplate, historyTemplate) {
    if (!localStorage.length) {
      this.renderSuggestionsOnly(suggestionTemplate);
    } else {
      this.renderHistoryAndSuggestions(historyTemplate);
    }
    // this.searchPanelView.toggleSearchPanel(e, true);
  }

  async renderHistoryAndSuggestions(historyTemplate) {
    searchPanel.innerHTML = await historyTemplate;
  }

  async renderSuggestionsOnly(suggestionTemplate) {
    searchPanel.innerHTML = '';
    searchPanel.insertAdjacentHTML('beforeend', await suggestionTemplate);
  }

  async renderAutoComplete(autoTemplate) {
    searchPanel.innerHTML = await autoTemplate;
  }

  async generateSuggest(terms) {
    const suggestions = await terms;
    const suggestListTemplate = suggestions.reduce((acc, cur) => {
      return (acc += `<li class="suggestion search-list">
            <img src="./src/images/arrow-top-right.svg" alt="이동">
            <span>${cur}</span>
          </li>`);
    }, '');
    return suggestListTemplate;
  }

  async generateHistoryAndSuggestions(historyTerms, suggestionTerms) {
    const history = await historyTerms;
    const suggestion = await suggestionTerms;
    const historyAndSuggestionsTemplate =
      history.reduce((acc, cur) => {
        return (acc += ` <li class="history search-list" >
            <span>${cur}</span>
            <img src="./src/images/close.svg" alt="삭제">
          </li>`);
      }, '') + (await this.generateSuggest(suggestion));

    return historyAndSuggestionsTemplate;
  }

  async generateAutoComplete(autoTerms, input) {
    if (!input || typeof input !== 'string') {
      throw new Error('Input is invalid.');
    }
    const autoComplete = await autoTerms;
    const inputRegex = new RegExp(input, 'gi');
    const AutoCompleteTemplate = autoComplete.reduce((acc, cur) => {
      const highlighted = cur.keyword.replace(
        inputRegex,
        `<span class="highlighted">${input}</span>`
      );
      return (acc += ` <li class="autocomplete search-list" >
            <span>${highlighted}</span>
          </li>`);
    }, '');

    return AutoCompleteTemplate;
  }
}

// 컨트롤러 역할
export class SearchBar {
  constructor(model, searchBarView, searchPanelView) {
    this.model = model;
    this.searchBarView = searchBarView;
    this.searchPanelView = searchPanelView;
  }

  init() {
    searchBarInput.addEventListener('click', e => {
      this.searchBarView.decideSuggestionsRendering(
        this.getSuggestionTemplate(),
        this.getHistoryAndSuggestionTemplate(),
      );
      this.searchPanelView.toggleSearchPanel(e, true)
    });

    document.addEventListener('click', e => {
      this.searchPanelView.toggleSearchPanel(e, false);
    });

    searchBarInput.addEventListener('keydown', e => {
      this.searchPanelView.storeInputTerms(e);
    });

    searchBarInput.addEventListener('input', () => {
      this.searchBarView.renderAutoComplete(this.getAutoCompleteTemplate());
    });

    searchBarInput.addEventListener('keyup', e => {
      this.searchPanelView.keyboardNavigationHandler(e);
    });

    searchPanel.addEventListener('click', e => {
      this.searchPanelView.deleteSearchTerm(e);
      this.searchPanelView.keyboardNavigationHandler(e);
      e.stopPropagation();
      this.searchBarView.renderHistoryAndSuggestions(
        this.getHistoryAndSuggestionTemplate()
      );
    });
  }

  async fetchApiTerms(searchPrefix) {
    const apiClient = new APIClient(searchPrefix);
    const fetchedTerms = await apiClient.getApiData();
    return fetchedTerms;
  }

  async fetchJsonTerms(path, prop, input) {
    const jsonClient = new JSONClient(path);
    const fetchedJsonTerms = await jsonClient.getJsonTermsData(prop, input);
    return fetchedJsonTerms;
  }

  setTerms(type) {
    switch (type) {
      case 'suggest':
        const prefix = getRandomLetter();
        this.model.setSuggestion(this.fetchApiTerms(prefix));
        break;

      case 'history':
        let history = JSON.parse(localStorage.getItem('searchHistory')) || [];
        this.model.setHistory(history);
        break;

      case 'auto':
        const inputValue = getInputValue(searchBarInput);
        if (!inputValue) {
          this.searchBarView.decideSuggestionsRendering(
            this.getSuggestionTemplate(),
            this.getHistoryAndSuggestionTemplate()
          );
          return;
        }
        this.model.setAuto(
          this.fetchJsonTerms(PATH.auto, PATH.prop, inputValue)
        );
        break;
    }
  }

  getSuggestionTemplate() {
    this.setTerms('suggest');
    const template = this.searchBarView.generateSuggest(
      this.model.getSuggestion()
    );
    return template;
  }
  getHistoryAndSuggestionTemplate() {
    this.setTerms('history');
    const template = this.searchBarView.generateHistoryAndSuggestions(
      this.model.getHistory(),
      this.model.getSuggestion()
    );
    return template;
  }
  getAutoCompleteTemplate() {
    this.setTerms('auto');
    const template = this.searchBarView.generateAutoComplete(
      this.model.getAuto(),
      getInputValue(searchBarInput)
    );
    return template;
  }
}

export class SearchPanelView {
  constructor() {
    this.activeIndex = -1;
    //아래 로컬스토리지 접근 객체와 엮여있어 모델로의 분리를 더 고민해봐야함
    this.searchHistoryManager = new SearchHistoryManager();
  }

  storeInputTerms(e) {
    if (e.keyCode !== NUMBER.enterKeyCode) return;
    if (e.keyCode === NUMBER.enterKeyCode) {
      e.preventDefault();
      const value = e.target.value.trim();

      if (value) {
        this.searchHistoryManager.addSearch(value);
      }
    }
  }

  deleteSearchTerm(e) {
    if (e.target.nodeName === 'IMG') {
      const searchTerm = e.target.closest('li').innerText;
      const searchHistory =
        JSON.parse(localStorage.getItem('searchHistory')) || [];
      const updatedSearchHistory = searchHistory.filter(
        item => item !== searchTerm
      );
      localStorage.setItem(
        'searchHistory',
        JSON.stringify(updatedSearchHistory)
      );

      return true;
    }
  }

  setActiveClass() {
    const searchResults = this.getSearchResultLists();
    searchResults.forEach((result, index) => {
      if (index === this.activeIndex) {
        result.classList.add('active');
        result.style.backgroundColor = 'yellow';
      } else {
        result.classList.remove('active');
        result.style.backgroundColor = '';
      }
    });
  }

  keyboardNavigationHandler(e) {
    if (e.key === 'ArrowDown') {
      this.handleArrowDown();
    } else if (e.key === 'ArrowUp') {
      this.handleArrowUp();
    } else {
      this.activeIndex = -1;
    }
    this.setActiveClass();
    this.setInputValue();
  }

  setInputValue(){
    const searchResults = this.getSearchResultLists();
    searchBarInput.value = searchResults[this.activeIndex].innerText
  }

  handleArrowDown() {
    const searchResults = this.getSearchResultLists();
    this.activeIndex += 1;

    if (this.activeIndex >= searchResults.length) {
      this.activeIndex = 0;
    }
  }

  handleArrowUp() {
    const searchResults = this.getSearchResultLists();

    this.activeIndex -= 1;
    if (this.activeIndex < 0) {
      this.activeIndex = searchResults.length - 1;
    }
  }

  getSearchResultLists() {
    return searchPanel.querySelectorAll('li');
  }

  toggleSearchPanel(e, isPanelOpen) {
    console.log("불렷음");
    layerOpenState.searchPanel = isPanelOpen;
    if (isPanelOpen) {
      searchPanel.classList.remove('hidden');
      handleDimming();
    } else if (!e.target.closest('.main-search-bar')) {
      searchPanel.classList.add('hidden');
      handleDimming();
    }
  }
}
