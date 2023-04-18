import { findEvent } from "../util/factory.js";
import { Component } from "./Component.js";

export class Login extends Component {
  constructor({ domNode, children }) {
    super();
    this.domNode = domNode;
    this.children = children;
  }

  setEvent() {
    this.domNode.addEventListener("mouseover", () => findEvent("mainDim")());
    this.domNode.addEventListener("mouseout", () => findEvent("mainTurnUp")());
  }

  load() {
    this.setEvent();
    const popover = this.domNode.querySelector(".popover");
    const hr = popover.querySelector("hr");
    hr.hidden = true;
    popover.open = true;
    setTimeout(() => {
      popover.style.opacity = "1";
    }, 1);

    popover.addEventListener(
      "mouseover",
      () => {
        hr.hidden = false;
        popover.open = false;
      },
      { once: true }
    );
  }
}
