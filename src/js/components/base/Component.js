export class Component {
  #node;

  constructor(className = '', tagName = 'DIV') {
    this.#node = document.createElement(tagName);
    this.#node.className = className;
  }

  init(info) {
    this.render(info);
    this.initEventHandlers();
  }

  render(info) {
    this.dropPreviousRender();
    const template = this.getTemplate(info);

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
