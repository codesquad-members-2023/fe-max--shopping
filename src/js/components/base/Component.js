import { $context } from '../../utils/querySelector.js';

export class Component {
  #node;

  constructor(className = '', tagName = 'DIV') {
    this.#node = document.createElement(tagName);
    this.#node.className = className;
    this.$ = $context(this.#node);
    this.render();
    this.initEventHandlers();
  }

  render() {
    const template = this.template();

    if (typeof template === 'string') {
      this.#node.insertAdjacentHTML('afterbegin', template);
      return;
    }

    this.#node.append(...template);
  }

  template() {
    return '';
  }

  initEventHandlers() {}

  get node() {
    return this.#node;
  }
}
