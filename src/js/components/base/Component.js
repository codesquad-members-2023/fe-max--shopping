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

    if (template instanceof Node) {
      this.#node.append(template);
      return;
    }

    this.#node.insertAdjacentHTML('afterbegin', template);
  }

  template() {
    return '';
  }

  initEventHandlers() {}

  get node() {
    return this.#node;
  }
}
