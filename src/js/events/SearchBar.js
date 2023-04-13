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
    this.searchLayer = document.querySelector('.search-layer');
  }

  initSearchBar() {
    searchBarInput.addEventListener('focus', () => {
      this.showSuggestions();
    });
    searchBarInput.addEventListener('keydown', e => {
      this.showAutoComplete(e);
      this.storeInputTerms(e);
    });
    searchBarInput.addEventListener('blur', () => {
      this.toggleSearchPanel(false)
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
  showHistoryAndSuggestions() {
    this.termsType.history = store.getLocalStorage().reverse().slice(0, 5);
    const template =
      this.templateGenerator.generateHistoryAndSuggestionsTemplate(
        this.termsType
      );
    this.searchLayer.innerHTML = template;
  }

  async showSuggestions() {
    this.termsType.suggest = await this.fetchSuggestions();
    if (!localStorage.length) {
      this.renderSearchBarPanel();
    } else {
      this.showHistoryAndSuggestions();
    }
    // this.handleModal();
    this.toggleSearchPanel(true)
  }

  async fetchSuggestions() {
    const apiClient = new APIClient(getRandomLetter());
    const suggestedSearchTerms = await apiClient.getApiData();
    return suggestedSearchTerms;
  }

  async showAutoComplete(e) {
    console.log(searchBarInput.value);
    const input = searchBarInput.value.trim();
    if (!input) {
      return;
    }
    const apiClient = new APIClient(input);
    const autoCompleteTerms = await apiClient.getApiData();
    this.termsType.auto = autoCompleteTerms;

    const template = this.templateGenerator.generateAutoCompleteTemplate(
      this.termsType.auto,
      input
    );

    this.searchLayer.innerHTML = template;
  }

  renderSearchBarPanel() {
    this.searchLayer.innerHTML = '';
    const template = this.templateGenerator.generateSuggestTemplate(
      this.termsType.suggest
    );
    this.searchLayer.insertAdjacentHTML('beforeend', template);
  }

  handleModal() {
    modalState.searchModal = true;
    this.searchLayer.classList.remove('hidden');
    handleDimming();
  }
  // removeModal(e) {
  //   if (!e.target.closest('.main-search-bar')) {
  //     modalState.searchModal = false;
  //     handleDimming();
  //     this.searchLayer.classList.add('hidden');
  //   }
  // }
  removeModal() {
    modalState.searchModal = false;
    this.searchLayer.classList.add('hidden');
    handleDimming();
  }

  toggleSearchPanel(isModalOpen) {
    modalState.searchModal = isModalOpen;
    if (isModalOpen) {
      this.searchLayer.classList.remove('hidden');
    } else {
      this.searchLayer.classList.add('hidden');
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
