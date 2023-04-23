import { addEvent, findEvent } from "../util/factory.js";
import { Component } from "./Component.js";

export class SidebarTrigger extends Component {
  constructor({ domNode, children }) {
    super();
    this.domNode = domNode;
    this.children = children;
  }

  setEvent() {
    this.domNode.addEventListener("click", () => findEvent("sidebarToggle")())
    addEvent("SidebarTriggerFocus", () => {
      this.domNode.focus()
    })
  }
}
