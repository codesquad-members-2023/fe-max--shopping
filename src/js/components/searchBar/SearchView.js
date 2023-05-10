import { createElement, openLayer } from '../../utils/domUtils.js';

export class SearchView {
  constructor(parent) {
    this.parent = parent;
    this.eventCallbacks = {};

    this.searchBox = createElement('form', { class: 'search-box' });
    this.inputBox = createElement('input', {
      type: 'text',
      class: 'search-box__input',
      placeholder: '검색 amazon',
      name: 'search',
      autocomplete:"off"
    });
    this.submitButton = createElement('button', { type: 'submit', class: 'search-box__button' });
    this.submitButton.innerHTML = `<img src="./src/asset/img/search.svg" alt="" />`;

    this.dropdown = createElement('div', { class: 'search-dropdown layer hidden' });
    this.suggestion = createElement('ul', { class: 'search-dropdown__suggestion' });

    this.searchBox.append(this.inputBox, this.submitButton);
    this.dropdown.append(this.suggestion);
  }

  render() {
    this.parent.append(this.searchBox, this.dropdown);
  }

  layerRender({ recentSearches, recommendSearches, autoCompleteSearches }) {
    const recents = recentSearches ? recentSearches.map(this.createRecentTemplate) : [];
    const recommends = recommendSearches ? recommendSearches.map(this.createRecommendTemplate) : [];
    const autoCompletes = autoCompleteSearches
      ? autoCompleteSearches.map(this.createAutoCompleteTemplate)
      : [];
    this.suggestion.innerHTML = [...recents, ...recommends, ...autoCompletes].join('');
  }

  setInputBoxValue(textContent) {
    this.inputBox.value = textContent;
  }

  createRecentTemplate(search) {
    return `<li class="search-layer__suggestion--recent"><p>${search.text}</p><button class="search-layer__remove-button"><img src="src/asset/img/close.svg" alt="삭제"></button></li>`;
  }

  createRecommendTemplate(search) {
    return `<li class="search-layer__suggestion--recommend"><p><a src=""><img src="src/asset/img/arrow-top-right.svg" alt="공유"></a>${search.text}</p></li>`;
  }

  createAutoCompleteTemplate(search) {
    return `<li class="search-layer__suggestion--auto-complete"><p>${search.text}</p></li>`;
  }

  onEvent(element, eventType, callback) {
    this[element].addEventListener(eventType, callback);
  }

  openDropdown() {
    openLayer(this.dropdown);
  }
}
