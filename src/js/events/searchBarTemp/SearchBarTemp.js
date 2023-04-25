import { $ } from '../../utils/dom.js';
import { APIClient, JSONClient } from '../api/api.js';
import { getRandomLetter } from '../../utils/pickPrefix.js';
import { PATH } from '../../constants/path.js';
import { SearchHistoryManager } from './SearchHistoryManagerTemp.js';
import { handleDimming, layerOpenState } from '../../utils/dim.js';

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
    // this.searchPanelHandler.toggleSearchPanel(e, true);
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
  constructor(model, view) {
      // 키보드 이벤트 관련/뷰에 두어야 하는가..?
    this.searchPanelHandler = new SearchPanelHandler();

    this.model = model;
    this.view = view;
  }

  init() {
    searchBarInput.addEventListener('click', e => {
      this.view.decideSuggestionsRendering(
        this.getSuggestionTemplate(),
        this.getHistoryAndSuggestionTemplate()
      );
      this.searchPanelHandler.toggleSearchPanel(e, true);
    });

    document.addEventListener('click', e => {
      this.searchPanelHandler.toggleSearchPanel(e, false);
    });

    searchBarInput.addEventListener('keydown', e => {
      this.searchPanelHandler.storeInputTerms(e);
    });

    searchBarInput.addEventListener('input', e => {
      this.view.renderAutoComplete(this.getAutoCompleteTemplate());
    });

    searchBarInput.addEventListener('keyup', e => {
      this.searchPanelHandler.keyboardNavigationHandler(e);
    });

    searchPanel.addEventListener('click', e => {
      this.searchPanelHandler.deleteSearchTerm(e);
      this.searchPanelHandler.keyboardNavigationHandler(e);
      e.stopPropagation();
      this.view.renderHistoryAndSuggestions(this.getHistoryAndSuggestionTemplate());
    });
  }

  getSuggestionTemplate() {
    this.model.setSuggestion();
    const template = this.view.generateSuggest(this.model.getSuggestion());
    return template;
  }
  getHistoryAndSuggestionTemplate() {
    this.model.setHistory();
    const template = this.view.generateHistoryAndSuggestions(
      this.model.getHistory(),
      this.model.getSuggestion()
    );
    return template;
  }
  getAutoCompleteTemplate() {
    this.model.setAuto();
    const template = this.view.generateAutoComplete(
      this.model.getAuto(),
      this.model.getInputValue()
    );
    return template;
  }
}

export class SearchPanelHandler {
  constructor() {
    this.activeIndex = -1;
    //아래 로컬스토리지 접근 객체와 엮여있어 모델로의 분리를 더 고민해봐야함
    this.searchHistoryManager = new SearchHistoryManager();
  }

  storeInputTerms(e) {
    if (e.keyCode !== 13) return;
    if (e.keyCode === 13) {
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


export class SearchBarModel {
  constructor() {
    this.termsType = { suggest: [], history: [], auto: [] };
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

  setTermsType(type, terms) {
    this.termsType[type] = terms;
  }

  setSuggestion() {
    const prefix = getRandomLetter();
    this.setTermsType('suggest', this.fetchApiTerms(prefix));
  }

  getSuggestion() {
    return this.termsType.suggest;
  }

  setHistory() {
    let history = JSON.parse(localStorage.getItem('searchHistory')) || [];
    this.setTermsType('history', history.reverse().slice(0, 5));
  }

  getHistory() {
    return this.termsType.history;
  }

  setAuto() {
    const inputValue = this.getInputValue();
    if (!inputValue) {
      return;
    }
    this.setTermsType(
      'auto',
      this.fetchJsonTerms(PATH.auto, PATH.prop, inputValue)
    );
  }

  getAuto() {
    return this.termsType.auto;
  }

  getInputValue() {
    const input = searchBarInput.value.trim();
    return input;
  }
}
