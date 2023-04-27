import { $, createElement } from "../../utils/domUtils.js";

export class SearchBoxView {
  constructor() {
    this.wrapper = createElement('form', { class: 'search-box' });
    this.inputBox = createElement('input', { type: 'text', class: 'search-box__input', placeholder: '검색 amazon', name: 'search'})
    this.submitButton = createElement('button', {type: 'submit', class: 'search-box__button'})

    this.init();
  }
  
  init() {
    this.submitButton.innerHTML = `<img src="./src/asset/img/search.svg" alt="" />`
    this.wrapper.append(this.inputBox, this.submitButton);
  }

  getElement() {
    return this.wrapper;
  }

  getInputBox() {
    return this.inputBox;
  }
}