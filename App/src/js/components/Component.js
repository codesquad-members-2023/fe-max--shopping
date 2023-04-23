import { findComponent } from "../util/factory.js";

export class Component {
  constructor(tagName, attrs = false, textContent) {
    if (!tagName) return;
    this.domNode = document.createElement(tagName);
    if (attrs) {
      Object.entries(attrs).forEach(([name, value]) => {
        this.domNode.setAttribute(name, value);
      });
    }
    if (textContent) {
      this.textContent = textContent;
    }
    this.children = [];
  }

  changeSubComponent() {
    this.children.forEach((child, index, children) => {
      const { tagName, id } = child.domNode;
      let subComponent = findComponent(tagName);
      if (!subComponent) subComponent = findComponent(id);
      
      if (subComponent) {
        children[index] = new subComponent(child);
      }
      child.changeSubComponent();
    });
  }

  appendChildComponent(recipe) {
    const { tagName, attrs, textContent, children } = recipe;
    const childComponent = new Component(tagName, attrs, textContent);
    if (children) {
      children.forEach((child, index) => {
        childComponent.appendChildComponent(child);
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

  setEvent() {}

  load() {
    this.setEvent();
    this.children.forEach((child) => {
      child.load();
    });
  }

  view() {
    return this.domNode.outerHTML;
  }
}
