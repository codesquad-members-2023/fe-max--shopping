import { $ } from '../utils/dom.js';
import { APIClient } from './api.js';
import { getRandomLetter } from '../utils/pickPrefix.js';
import { handleDimming, layerOpenState } from '../utils/dim.js';
import { store } from './store.js';

const searchBarInput = document.searchForm.searchBar;
const searchPanel = document.querySelector('.search-panel');
const ESC = 27;
//
export class SearchHistoryManager {
  constructor() {
    this.history = JSON.parse(localStorage.getItem('searchHistory')) || [];
  }

  addSearch(value) {
    if (!this.isDuplicate()) {
      const newSearch = {
        id: this.history.length,
        value: value,
      };
      // this.history.push(newSearch);

      let history = JSON.parse(localStorage.getItem('searchHistory')) || [];
      history.push(newSearch);
      // localStorage.setItem('searchHistory', JSON.stringify(this.history));
      localStorage.setItem('searchHistory', JSON.stringify(history));
    }
  }

  isDuplicate(value) {
    return this.history.some(el => el.value === value);
  }

  getHistory() {
    return this.history;
  }
}
export class SearchUI {
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
        item => item.value !== searchTerm
      );

      localStorage.setItem(
        'searchHistory',
        JSON.stringify(updatedSearchHistory)
      );

      return true;
    }
  }

  setActiveClass() {
    const searchResults = searchPanel.querySelectorAll('li');
    if (this.activeIndex >= searchResults.length) {
      this.activeIndex = 0;
    } else if (this.activeIndex < 0) {
      this.activeIndex = searchResults.length - 1;
    }
    searchResults.forEach((result, index) => {
      if (index === this.activeIndex) {
        result.classList.add('active');
        result.style.backgroundColor = 'yellow'; // 배경색 변경
      } else {
        result.classList.remove('active');
        result.style.backgroundColor = ''; // 배경색 초기화
      }
    });
  }

  keyboardNavigationHandler(e) {
    if (e.key === 'ArrowDown') {
      this.activeIndex++;
      this.setActiveClass();
    } else if (e.key === 'ArrowUp') {
      this.activeIndex--;
      this.setActiveClass();
    } 
    else {
      // 검색어 입력 중일 때
      this.activeIndex = -1;
      // getResults(searchBarInput.value);
    }
  }
}
export class SearchTermFetcher {
  async fetchTerms(searchPrefix) {
    const apiClient = new APIClient(searchPrefix);
    const fetchedTerms = await apiClient.getApiData();
    return fetchedTerms;
  }
}
export class SearchBar {
  constructor() {
    this.termsType = { suggest: [], history: [], auto: [] };
    this.templateGenerator = new TemplateGenerator();
    this.searchUI = new SearchUI();
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
      this.renderAutoComplete(e);
      this.searchUI.storeInputTerms(e);
    });
    searchBarInput.addEventListener('keyup', e => {
      this.searchUI.keyboardNavigationHandler(e);
    });
    searchPanel.addEventListener('click', e => {
      this.searchUI.deleteSearchTerm(e);
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

  renderHistoryAndSuggestions() {
    this.setTermsType('history', store.getLocalStorage().reverse().slice(0, 5));
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
      await this.searchTermFetcher.fetchTerms(inputValue)
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
    let HistoryTemplate = termsObj.history
      .map(el => el.value)
      .reduce((acc, cur) => {
        return (acc += ` <li class="history search-list" >
        <span>${cur}</span>
        <img src="./src/images/close.svg" alt="삭제">
      </li>`);
      }, '');
    return (HistoryTemplate += suggestionTemplate);
  }
  generateAutoComplete(terms, input) {
    const AutoCompleteTemplate = terms.reduce((acc, cur, i) => {
      const highlighted = new RegExp(`\\b${input}`, 'i');
      const match = highlighted.exec(cur);
      let highlightedText = cur;

      if (match) {
        const [matchedString] = match;
        const index = match.index;
        highlightedText =
          cur.slice(0, index) +
          `<mark>${matchedString}</mark>` +
          cur.slice(index + matchedString.length);
      }

      const autoCompleteListItem = `
        <li class="autocomplete search-list">
          <span>${highlightedText}</span>
        </li>
      `;

      return acc + autoCompleteListItem;
    }, '');

    return AutoCompleteTemplate;
  }
}
