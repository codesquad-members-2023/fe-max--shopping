import { addEvent, findEvent } from "../utils/factory.js";
import { Component } from "./Component.js";

export class SidebarTrigger extends Component {
  constructor(component) {
    super();
    this.restructure(component);
  }

  setEvent() {
    this.domNode.addEventListener("click", () => findEvent("sidebarToggle")());
    addEvent("SidebarTriggerFocus", () => {
      this.domNode.focus();
    });
  }
}
