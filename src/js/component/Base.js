import { HtmlParser } from "../parser/HtmlParser.js";

export class Base {
  #_node;
  static htmlParser = new HtmlParser();

  constructor(tagName) {
    this.#_node = document.createElement(tagName);
  }

  get node() {
    return this.#_node;
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

  setEvent(type, handler, option) {
    this.#_node.addEventListener(type, handler, option);
  }

  setStyle(prop, attr) {
    this.#_node.style[prop] = attr;
  }

  htmlParsing(htmlString) {
    return Base.htmlParser.getParsedData(htmlString);
  }

  setTemplate(htmlString) {
    const htmlArray = this.htmlParsing(htmlString);
    htmlArray.forEach((htmlData) => {
      this.#_node.appendChild(this.createNode(htmlData).node);
    });
  }

  createNode(htmlData) {
    const isText = htmlData.type === "text";
    if (isText) {
      const textNode = document.createTextNode(htmlData.text);
      return { node: textNode };
    }

    return this.createElementNode(htmlData);
  }

  createElementNode({ tagName, attribute, name, children }) {
    const childNode = new Base(tagName);
    if (attribute) {
      for (const key in attribute) {
        childNode.setAttribute(key, attribute[key]);
      }
    }

    if (children.length) {
      const childArray = children.map((child) => {
        return this.createNode(child);
      });
      childNode.setChildren(...childArray);
    }

    if (name) {
      this[name] = childNode;
    }

    return childNode;
  }

  clearChild() {
    while (this.#_node.firstChild) {
      this.#_node.removeChild(this.#_node.firstChild);
    }
  }

  isNode(node) {
    return node instanceof Node;
  }
}

