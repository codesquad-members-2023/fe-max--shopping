export class Base {
  #_node;
  constructor(tagName) {
    this.#_node = document.createElement(tagName);
  }

  get node() {
    return this.#_node;
  }

  setTextContent(content) {
    this.#_node.textContent = content;
  }

  setAttribute(attName, attValue) {
    this.#_node.setAttribute(attName, attValue);
  }

  setChildren(...children) {
    children.forEach((child) => {
      if (!this.isNode(child.node)) {
        console.log(child);
        throw console.error(`[ ${child} ] is not node!`);
      }

      this.#_node.appendChild(child.node);
    });
  }

  setEvent(type, handler) {
    this.#_node.addEventListener(type, handler);
  }

  setStyle(prop, attr) {
    this.#_node.style[prop] = attr;
  }

  createChild(tagName, attribute, textContent, name, children) {
    const child = new Base(tagName);
    if (attribute) {
      attribute.forEach((attr) => {
        child.setAttribute(attr.name, attr.value);
      });
    }

    if (textContent) {
      child.setTextContent(textContent);
    }

    if (children) {
      child.setChildren(...children.map((chilldName) => this[chilldName]));
    }

    this[name] = child;
    this.setChildren(child);
  }

  isNode(node) {
    return node instanceof Node;
  }
}
