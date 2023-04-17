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
      const templateElement = document.createElement('template');
      templateElement.innerHTML = template;
      this.#node.append(templateElement.content);
      return;
    }

    this.#node.append(...template);
  }

  dropPreviousRender() {
    if (this.#node.innerHTML) {
      this.#node.innerHTML = '';
    }
  }

  initEventHandlers() {}

  get node() {
    return this.#node;
  }
}
