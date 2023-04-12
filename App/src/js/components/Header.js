import { findEvent } from "../utils.js";
import { Component } from "./Component.js";

export class Header extends Component {
  constructor({ domNode, children }) {
    super();
    this.domNode = domNode;
    this.children = children;
  }

  setEvent() {
    const sidebarTrigger = this.domNode.querySelector(".sidebar-trigger");
    sidebarTrigger.addEventListener("click", () => {
      findEvent("sidebarToggle")();
    });
  }

  load() {
    this.setEvent();
  }
}
