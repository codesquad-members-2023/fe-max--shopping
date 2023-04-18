export class Component {
  #node;

  constructor(className = '', tagName = 'DIV') {
    this.#node = document.createElement(tagName);
    this.#node.className = className;
  }

  static makeElement(parentTagName, literal) {
    const parentElement = document.createElement(parentTagName);
    const templateElement = document.createElement('template');
    templateElement.innerHTML = literal;

    parentElement.append(templateElement.content);
    return parentElement;
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
