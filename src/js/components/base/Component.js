import { $context } from '../../utils/utils.js';

export class Component {
  #node;

  constructor(className = '', tagName = 'DIV') {
    this.#node = document.createElement(tagName);
    this.#node.className = className;
    this.$ = $context(this.#node);
  }

  init(state) {
    this.render(state);
    this.initEventHandlers();
  }

  render(state) {
    this.dropPreviousRender();

    const template = this.getTemplate(state);

    if (typeof template === 'string') {
      this.#node.insertAdjacentHTML('afterbegin', template);
      return;
    }

    this.#node.append(...template);
  }

  getTemplate() {
    return '';
  }

  initEventHandlers() {}

  get node() {
    return this.#node;
  }

  dropPreviousRender () {
    this.#node.innerHTML = '';
  }
}
