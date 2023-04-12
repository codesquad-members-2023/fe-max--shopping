import { findComponent } from "../utils.js";

export class Component {
  constructor(tagName, attrs = false, textContent) {
    if (!tagName) return;
    this.domNode = document.createElement(tagName);
    if (attrs) {
      for (let [name, value] of Object.entries(attrs)) {
        this.domNode.setAttribute(name, value);
      }
    }
    if (textContent) {
      this.textContent = textContent;
    }
    this.children = [];
  }

  changeSubComponent() {
    this.children.forEach((child, index, children) => {
      console.log(child)
      const { tagName, id, className } = child.domNode;
      let subComponent = findComponent(tagName);
      if (!subComponent) subComponent = findComponent(id);

      if (subComponent) {
        children[index] = new subComponent(child);
        return;
      }
    });
  }

  parseJsonRecursiveAppendChild(recipe) {
    const { tagName, attrs, textContent, children } = recipe;
    const childComponent = new Component(tagName, attrs, textContent);
    if (children) {
      children.forEach((child, index) => {
        childComponent.parseJsonRecursiveAppendChild(child);
      });
    }
    this.appendChild(childComponent);
  }

  appendChild(child) {
    this.children.push(child);
  }

  render() {
    this.domNode.replaceChildren();
    if (this.textContent) {
      this.domNode.textContent = this.textContent;
    }
    this.children.forEach((child) => {
      child.render();
      this.domNode.appendChild(child.domNode);
    });
  }

  view() {
    return this.domNode.outerHTML;
  }
}
