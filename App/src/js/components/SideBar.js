import { addEvent } from "../utils.js";
import { Component } from "./Component.js";

export class Sidebar extends Component {
  constructor({ domNode, children }) {
    super();
    this.domNode = domNode;
    this.children = children;

  }

  setEvent() {
    const aside = this.domNode.querySelector("ASIDE");
    aside.addEventListener("click", (e) => {
      e.stopPropagation();
    });

    sidebar.addEventListener("click", this.toggle.bind(this))

    addEvent("sidebarToggle", this.toggle.bind(this))
  }

  load() {
    this.domNode.style.opacity = "0";
    setTimeout(() => {
      this.domNode.style.opacity = "1";
    }, 1000);

    this.setEvent();
  }

  toggle() {
    this.domNode.classList.toggle("active");
  }
}
