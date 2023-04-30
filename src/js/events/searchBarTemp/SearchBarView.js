import { $ } from '../../utils/dom.js';

const searchPanel = $('.search-panel');

export class SearchBarView {
  decideSuggestionsRendering(suggestionTemplate, historyTemplate) {
    if (!localStorage.length) {
      this.renderSuggestionsOnly(suggestionTemplate);
    } else {
      this.renderHistoryAndSuggestions(historyTemplate);
    }
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

  generateSuggest(terms) {
    const suggestions = terms;
    const suggestListTemplate = suggestions.reduce((acc, cur) => {
      return (acc += `<li class="suggestion search-list">
              <img src="./src/images/arrow-top-right.svg" alt="이동">
              <span>${cur}</span>
            </li>`);
    }, '');
    return suggestListTemplate;
  }

  generateHistoryAndSuggestions(historyTerms, suggestionTerms) {
    const history = historyTerms;
    const suggestion = suggestionTerms;
    const historyAndSuggestionsTemplate =
      history.reduce((acc, cur) => {
        return (acc += ` <li class="history search-list" >
              <span>${cur}</span>
              <img src="./src/images/close.svg" alt="삭제">
            </li>`);
      }, '') + this.generateSuggest(suggestion);

    return historyAndSuggestionsTemplate;
  }

  generateAutoComplete(autoTerms, input) {
    if (!input || typeof input !== 'string') {
      throw new Error('Input is invalid.');
    }
    const autoComplete = autoTerms;
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
