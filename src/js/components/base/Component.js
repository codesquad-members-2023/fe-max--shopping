export class Component {
  #node;

  constructor(className = '', tagName = 'DIV') {
    this.#node = document.createElement(tagName);
    this.#node.className = className;
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
      this.#node.append(templateElement.content.cloneNode(true));
      return;
    }

    this.#node.append(...template);
  }

  dropPreviousRender() {
    if (this.#node.innerHTML) {
      this.#node.innerHTML = '';
    }
  }

  getTemplate() {
    return '';
  }

  initEventHandlers() {}

  get node() {
    return this.#node;
  }
}
