import { $, createElement } from "../../utils/domUtils.js";

export class SearchDropDownView {
  constructor() {
    this.dropdown = createElement('div', {class: 'search-dropdown layer'});
    this.suggestion = createElement('ul', {class: 'search-dropdown__suggestion'});

    this.init();
  }

  init() {
    this.dropdown.append(this.suggestion);
  }

  getElement() {
    return this.dropdown;
  }

  setElement(recents, recommends) {
    const items = [...recents.map(this.createRecentTemplate), ...recommends.map(this.createRecommendTemplate)];
    this.suggestion.innerHTML = '';
    for (const item of items) {
      this.suggestion.insertAdjacentHTML('beforeend', item);
    }
  }

  createRecentTemplate(search) {
    return `<li class="search-layer__suggestion--recent"><p>${search.text}</p><button class="search-layer__remove-button"><img src="src/asset/img/close.svg" alt="삭제"></button></li>`
  }

  createRecommendTemplate(search) {
    return `<li class="search-layer__suggestion--recommend"><p><a src=""><img src="src/asset/img/arrow-top-right.svg" alt="공유"></a>${search.text}</p></li>`;
  }
}