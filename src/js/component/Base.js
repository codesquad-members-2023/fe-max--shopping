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

  isNode(node) {
    return node instanceof Node;
  }
}
