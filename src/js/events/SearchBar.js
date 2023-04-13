import { $ } from '../utils/dom.js';
import { APIClient } from './api.js';
import { getRandomLetter } from '../utils/pickPrefix.js';
import { handleDimming, layerOpenState } from '../utils/dim.js';
import { store } from './store.js';

const searchBarInput = document.searchForm.searchBar;
const searchPanel = document.querySelector('.search-panel');
const ESC = 27;
//

export class SearchBar {
  constructor() {
    this.termsType = { suggest: [], history: [], auto: [] };
    this.templateGenerator = new TemplateGenerator();
    this.searchPanel = document.querySelector('.search-panel');
  }

  initSearchBar() {
    searchBarInput.addEventListener('focus', () => {
      this.renderSuggestions();
    });

    searchBarInput.addEventListener('keydown', e => {
      this.renderAutoComplete(e);
      this.storeInputTerms(e);
    });

    searchBarInput.addEventListener('blur', () => {
      this.toggleSearchPanel(false);
    });
  }

  // storeInputTerms(e) {
  //   if (e.keyCode !== 13) return;
  //   if (e.keyCode === 13) {
  //     e.preventDefault();
  //     const value = e.target.value.trim();

  //     if (value) {
  //       let history = this.termsType.history;
  //       history = JSON.parse(localStorage.getItem('searchHistory')) || [];
  //       const newSearch = {
  //         id: history.length,
  //         value: value,
  //       };

  //       const isDuplicate = history.some(el => el.value === value);
  //       if (!isDuplicate) {
  //         history.push(newSearch);
  //         localStorage.setItem('searchHistory', JSON.stringify(history));
  //       }

  //     }
  //   }
  // }
  storeInputTerms(e) {
    if (e.keyCode !== 13) return;
    if (e.keyCode === 13) {
      e.preventDefault();
      const value = e.target.value.trim();

      if (value) {
        let history = this.getHistory();
        this.termsType.history = history;
        const newSearch = {
          id: history.length,
          value: value,
        };

        if (!this.isDuplicate(history, value)) {
          history.push(newSearch);
          this.storeHistory(history);
        }
      }
    }
  }

  getHistory() {
    return JSON.parse(localStorage.getItem('searchHistory')) || [];
  }
  storeHistory(history) {
    localStorage.setItem('searchHistory', JSON.stringify(history));
  }

  isDuplicate(history, value) {
    return history.some(el => el.value === value);
  }

  async fetchTerms(searchPrefix) {
    const apiClient = new APIClient(searchPrefix);
    const fetchedTerms = await apiClient.getApiData();
    return fetchedTerms;
  }

  async renderSuggestions() {
    this.setTermsType('suggest', await this.fetchTerms(getRandomLetter()));
    if (!localStorage.length) {
      this.renderSuggestionsOnly();
    } else {
      this.renderHistoryAndSuggestions();
    }
    this.toggleSearchPanel(true);
  }

  renderHistoryAndSuggestions() {
    this.setTermsType('history', store.getLocalStorage().reverse().slice(0, 5));
    const template =
      this.templateGenerator.generateHistoryAndSuggestionsTemplate(
        this.termsType
      );
    this.searchPanel.innerHTML = template;
  }

  renderSuggestionsOnly() {
    this.searchPanel.innerHTML = '';
    const template = this.templateGenerator.generateSuggestTemplate(
      this.termsType.suggest
    );
    this.searchPanel.insertAdjacentHTML('beforeend', template);
  }

  async renderAutoComplete() {
    const inputValue = this.getInputValue();
    if (!inputValue) {
      return;
    }
    this.setTermsType('auto', await this.fetchTerms(inputValue));
    const template = this.templateGenerator.generateAutoCompleteTemplate(
      this.termsType.auto,
      inputValue
    );
    this.searchPanel.innerHTML = template;
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
      this.searchPanel.classList.remove('hidden');
    } else {
      this.searchPanel.classList.add('hidden');
    }
    handleDimming();
  }
}

export class TemplateGenerator {
  generateSuggestTemplate(terms) {
    console.log(terms);
    const suggestListTemplate = terms.reduce((acc, cur) => {
      return (acc += `<li class="suggestion search-list">
        <img src="./src/images/arrow-top-right.svg" alt="이동">
        <span>${cur}</span>
      </li>`);
    }, '');
    return suggestListTemplate;
  }
  generateHistoryAndSuggestionsTemplate(termsObj) {
    const suggestionTemplate = this.generateSuggestTemplate(termsObj.suggest);
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
  generateAutoCompleteTemplate(terms, input) {
    const AutoCompleteTemplate = terms.reduce((acc, cur) => {
      const highlighted = new RegExp(`\\b${input}`, 'i');
      const match = highlighted.exec(cur);
      let highlightedText = cur;
      if (match) {
        const index = match.index;
        const matchedString = match[0];
        highlightedText =
          cur.slice(0, index) +
          `<mark>${matchedString}</mark>` +
          cur.slice(index + matchedString.length);
      }
      return (acc += `<li class="autocomplete search-list">
            <span>${highlightedText}</span>
          </li>`);
    }, '');
    return AutoCompleteTemplate;
  }
}
