export class BaseElement {
  constructor(className, tagName = 'div') {
    this.element = document.createElement(tagName);
    this.element.className = className;
  }

  getElement() {
    return this.element;
  }

  setEventHandler(event, handler) {
    this.element.addEventListener(event, handler);
  }

  setTemplate(template) {
    this.element.innerHTML = template;
  }
}
