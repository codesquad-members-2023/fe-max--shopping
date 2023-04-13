import { $ } from '../utils/dom.js';
import { APIClient } from './api.js';
import { getRandomLetter } from '../utils/pickPrefix.js';
import { handleDimming, modalState } from '../utils/dim.js';
import { store } from './store.js';

const searchBarInput = document.searchForm.searchBar;
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

  storeInputTerms(e) {
    if (e.keyCode !== 13) return;
    if (e.keyCode === 13) {
      e.preventDefault();
      const value = e.target.value.trim();

      if (value) {
        let history = this.termsType.history;
        history = JSON.parse(localStorage.getItem('searchHistory')) || [];
        const newSearch = {
          id: history.length,
          value: value,
        };

        const isDuplicate = history.some(el => el.value === value);
        if (!isDuplicate) {
          history.push(newSearch);
          localStorage.setItem('searchHistory', JSON.stringify(history));
        }

        console.log(history);
      }
    }
  }
  renderHistoryAndSuggestions() {
    // this.termsType.history = store.getLocalStorage().reverse().slice(0, 5);
    this.setTermsType('history', store.getLocalStorage().reverse().slice(0, 5));
    const template =
      this.templateGenerator.generateHistoryAndSuggestionsTemplate(
        this.termsType
      );
    this.searchPanel.innerHTML = template;
  }

  async renderSuggestions() {
    // this.termsType.suggest = await this.fetchSuggestions();
    this.setTermsType('suggest', await this.fetchSuggestions());
    if (!localStorage.length) {
      this.renderSearchBarPanel();
    } else {
      this.renderHistoryAndSuggestions();
    }
    // this.handleModal();
    this.toggleSearchPanel(true);
  }

  async fetchSuggestions() {
    const apiClient = new APIClient(getRandomLetter());
    const suggestedSearchTerms = await apiClient.getApiData();
    return suggestedSearchTerms;
  }

  async renderAutoComplete() {
    if (!this.getInputValue()) {
      return;
    }
    const apiClient = new APIClient(this.getInputValue());
    const autoCompleteTerms = await apiClient.getApiData();
    // this.termsType.auto = autoCompleteTerms;
    this.setTermsType('auto', autoCompleteTerms);

    const template = this.templateGenerator.generateAutoCompleteTemplate(
      this.termsType.auto,
      this.getInputValue()
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

  renderSearchBarPanel() {
    this.searchPanel.innerHTML = '';
    const template = this.templateGenerator.generateSuggestTemplate(
      this.termsType.suggest
    );
    this.searchPanel.insertAdjacentHTML('beforeend', template);
  }

  handleModal() {
    modalState.searchModal = true;
    this.searchPanel.classList.remove('hidden');
    handleDimming();
  }
  // removeModal(e) {
  //   if (!e.target.closest('.main-search-bar')) {
  //     modalState.searchModal = false;
  //     handleDimming();
  //     this.searchPanel.classList.add('hidden');
  //   }
  // }
  removeModal() {
    modalState.searchModal = false;
    this.searchPanel.classList.add('hidden');
    handleDimming();
  }

  toggleSearchPanel(isModalOpen) {
    modalState.searchModal = isModalOpen;
    if (isModalOpen) {
      this.searchPanel.classList.remove('hidden');
    } else {
      this.searchPanel.classList.add('hidden');
    }
    handleDimming();
  }
}

export class TemplateGenerator {
  constructor() {}

  generateSuggestTemplate(terms) {
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
