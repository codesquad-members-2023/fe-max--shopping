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
        this.getHistoryAndSuggestionTemplate()
      );
      this.searchPanelView.toggleSearchPanel(e, true);
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
        const history = JSON.parse(localStorage.getItem('searchHistory')) || [];
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

  async getSuggestionTemplate() {
    this.setTerms('suggest');
    const template = this.searchBarView.generateSuggest(
      await this.model.getSuggestion()
    );
    return template;
  }
  async getHistoryAndSuggestionTemplate() {
    this.setTerms('history');
    const template = this.searchBarView.generateHistoryAndSuggestions(
      await this.model.getHistory(),
      await this.model.getSuggestion()
    );
    return template;
  }
  async getAutoCompleteTemplate() {
    this.setTerms('auto');
    const template = this.searchBarView.generateAutoComplete(
      await this.model.getAuto(),
      getInputValue(searchBarInput)
    );
    return template;
  }
}


