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
    const shippingAddress = this.domNode.querySelector(".shipping-address");
    shippingAddress.addEventListener("mouseover", findEvent("mainDim"));
    shippingAddress.addEventListener("mouseout", findEvent("mainTurnUp"));

    const login = this.domNode.querySelector(".login");
    login.addEventListener("mouseover", findEvent("mainDim"));
    login.addEventListener("mouseout", findEvent("mainTurnUp"));
  }

  load() {
    this.setEvent();

    const login = this.domNode.querySelector(".login");
    const popover = login.querySelector(".popover");
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
