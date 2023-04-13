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
      this.history.push(newSearch);
      localStorage.setItem('searchHistory', JSON.stringify(this.history));
    }
  }

  isDuplicate(value) {
    return this.history.some(el => el.value === value);
  }

  static getHistory() {
    return this.history;
  }
}
export class SearchUI {
  constructor() {
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
    searchBarInput.addEventListener('focus', () => {
      this.renderSuggestions();
    });

    searchBarInput.addEventListener('keydown', e => {
      this.renderAutoComplete(e);
      this.searchUI.storeInputTerms(e);
    });

    searchBarInput.addEventListener('blur', () => {
      this.toggleSearchPanel(false);
    });
  }

  // async fetchTerms(searchPrefix) {
  //   const apiClient = new APIClient(searchPrefix);
  //   const fetchedTerms = await apiClient.getApiData();
  //   return fetchedTerms;
  // }

  async renderSuggestions() {
    const prefix = getRandomLetter();
    // this.setTermsType('suggest', await this.fetchTerms(getRandomLetter()));
    this.setTermsType('suggest', await this.searchTermFetcher.fetchTerms(prefix));
    if (!localStorage.length) {
      this.renderSuggestionsOnly();
    } else {
      this.renderHistoryAndSuggestions();
    }
    this.toggleSearchPanel(true);
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
    this.setTermsType('auto', await this.searchTermFetcher.fetchTerms(inputValue));
    // this.setTermsType('auto', await this.fetchTerms(inputValue));
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

  toggleSearchPanel(isPanelOpen) {
    layerOpenState.searchPanel = isPanelOpen;
    if (isPanelOpen) {
      searchPanel.classList.remove('hidden');
    } else {
      searchPanel.classList.add('hidden');
    }
    handleDimming();
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
    const AutoCompleteTemplate = terms.reduce((acc, cur) => {
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
