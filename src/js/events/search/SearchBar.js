import { $ } from '../../utils/dom.js';
import { APIClient, JSONClient } from '../api/api.js';
import { getRandomLetter } from '../../utils/pickPrefix.js';
import { handleDimming, layerOpenState } from '../../utils/dim.js';
import { PATH } from '../../constants/path.js';

const searchBarInput = document.searchForm.searchBar;
const searchPanel = $('.search-panel');
export class SearchHistoryManager {
  constructor() {
    this.history = JSON.parse(localStorage.getItem('searchHistory')) || [];
  }

  addSearch(value) {
    if (!this.isDuplicate()) {
      let history = JSON.parse(localStorage.getItem('searchHistory')) || [];
      history.push(value);
      localStorage.setItem('searchHistory', JSON.stringify(history));
    }
  }

  isDuplicate(value) {
    return this.history.some(el => el === value);
  }

  getHistory() {
    return this.history;
  }
}
export class SearchPanelHandler {
  constructor() {
    this.activeIndex = -1;
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
    if (e.key === 'ArrowDown' || e.target.nodeName === 'LI') {
      this.handleArrowDown();
    } else if (e.key === 'ArrowUp' || e.target.nodeName === 'LI') {
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
}
export class SearchTermFetcher {
  async fetchTerms(searchPrefix) {
    const apiClient = new APIClient(searchPrefix);
    const fetchedTerms = await apiClient.getApiData();
    return fetchedTerms;
  }
  async fetchJsonTerms(path, prop, keyword) {
    const jsonClient = new JSONClient(path);
    const fetchedJsonTerms = await jsonClient.getJsonTermsData(prop, keyword);
    return fetchedJsonTerms;
  }
}
export class SearchBar {
  constructor() {
    this.termsType = { suggest: [], history: [], auto: [] };
    this.templateGenerator = new TemplateGenerator();
    this.searchPanelHandler = new SearchPanelHandler();
    this.searchTermFetcher = new SearchTermFetcher();
  }

  initSearchBar() {
    searchBarInput.addEventListener('click', e => {
      this.renderSuggestions(e);
    });

    document.addEventListener('click', e => {
      this.toggleSearchPanel(e, false);
    });

    searchBarInput.addEventListener('keydown', e => {
      this.searchPanelHandler.storeInputTerms(e);
    });

    searchBarInput.addEventListener('input', e => {
      this.renderAutoComplete(e);
    });

    searchBarInput.addEventListener('keyup', e => {
      this.searchPanelHandler.keyboardNavigationHandler(e);
    });

    searchPanel.addEventListener('click', e => {
      this.searchPanelHandler.deleteSearchTerm(e);
      this.searchPanelHandler.keyboardNavigationHandler(e);
      e.stopPropagation();
      this.renderHistoryAndSuggestions();
    });
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

  async renderSuggestions(e) {
    const prefix = getRandomLetter();
    this.setTermsType(
      'suggest',
      await this.searchTermFetcher.fetchTerms(prefix)
    );
    if (!localStorage.length) {
      this.renderSuggestionsOnly();
    } else {
      this.renderHistoryAndSuggestions();
    }
    this.toggleSearchPanel(e, true);
  }

  async renderHistoryAndSuggestions() {
    let history = JSON.parse(localStorage.getItem('searchHistory')) || [];
    this.setTermsType('history', history.reverse().slice(0, 5));
    const template = this.templateGenerator.generateHistoryAndSuggestions(
      this.termsType
    );
    searchPanel.innerHTML = template;
  }

  renderSuggestionsOnly() {
    searchPanel.innerHTML = '';
    const template = this.templateGenerator.generateSuggest(
      this.termsType.suggest
    );
    searchPanel.insertAdjacentHTML('beforeend', template);
  }

  async renderAutoComplete() {
    const inputValue = this.getInputValue();
    if (!inputValue) {
      return;
    }
    this.setTermsType(
      'auto',
      await this.searchTermFetcher.fetchJsonTerms(
        PATH.auto,
        PATH.prop,
        inputValue
      )
    );
    const template = this.templateGenerator.generateAutoComplete(
      this.termsType.auto,
      inputValue
    );
    searchPanel.innerHTML = template;
  }

  getInputValue() {
    const input = searchBarInput.value.trim();
    return input;
  }

  setTermsType(type, terms) {
    this.termsType[type] = terms;
  }
}

export class TemplateGenerator {
  generateSuggest(terms) {
    const suggestListTemplate = terms.reduce((acc, cur) => {
      return (acc += `<li class="suggestion search-list">
        <img src="./src/images/arrow-top-right.svg" alt="이동">
        <span>${cur}</span>
      </li>`);
    }, '');
    return suggestListTemplate;
  }
  generateHistoryAndSuggestions(termsObj) {
    const suggestionTemplate = this.generateSuggest(termsObj.suggest);
    let HistoryTemplate = termsObj.history.reduce((acc, cur) => {
      return (acc += ` <li class="history search-list" >
        <span>${cur}</span>
        <img src="./src/images/close.svg" alt="삭제">
      </li>`);
    }, '');
    return (HistoryTemplate += suggestionTemplate);
  }
  generateAutoComplete(terms, input) {
    if (!input || typeof input !== 'string') {
      throw new Error('Input is invalid.');
    }

    const inputRegex = new RegExp(input, 'gi');
    const AutoCompleteTemplate = terms.reduce((acc, cur) => {
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
  generateSlides(slides) {
    let slidesTemplate = slides.reduce((acc, cur, i) => {
      return (acc += `<li class="slide-item">
      <img src="${cur}" alt="${i}">
  </li>`);
    }, '');
    return slidesTemplate;
  }
}
