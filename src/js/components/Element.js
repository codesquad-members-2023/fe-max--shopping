import { $context } from '../utils/querySelector.js';

class Element {
  #root;

  constructor(tagName = 'DIV') {
    this.#root = document.createElement(tagName);
    this.$ = $context(this.#root);
    this.render();
    this.initEventHandlers();
  }

  render() {
    this.#root.innerHTML = this.template();
  }

  template() {}

  initEventHandlers() {}

  get root() {
    return this.#root;
  }
}
