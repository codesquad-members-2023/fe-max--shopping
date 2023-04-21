import { $ } from '../../utils/dom.js';
import { APIClient, JSONClient } from '../api/api.js';
import { getRandomLetter } from '../../utils/pickPrefix.js';
import { PATH } from '../../constants/path.js';
import { TemplateGenerator } from './TemplateGenerator.js';
import { SearchPanelHandler } from './SearchPanelHandler.js';

const searchBarInput = document.searchForm.searchBar;
const searchPanel = $('.search-panel');

export class SearchTermFetcher {
  async fetchApiTerms(searchPrefix) {
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
      this.searchPanelHandler.toggleSearchPanel(e, false);
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

  async renderSuggestions(e) {
    const prefix = getRandomLetter();
    this.setTermsType(
      'suggest',
      await this.searchTermFetcher.fetchApiTerms(prefix)
    );
    if (!localStorage.length) {
      this.renderSuggestionsOnly();
    } else {
      this.renderHistoryAndSuggestions();
    }
    this.searchPanelHandler.toggleSearchPanel(e, true);
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
