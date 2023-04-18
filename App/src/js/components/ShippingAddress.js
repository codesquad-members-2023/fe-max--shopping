import { findEvent } from "../util/factory.js";
import { Component } from "./Component.js";

export class ShippingAddress extends Component {
  constructor({ domNode, children }) {
    super();
    this.domNode = domNode;
    this.children = children;
  }

  setEvent() {
    this.domNode.addEventListener("mouseover", () => findEvent("mainDim")());
    this.domNode.addEventListener("mouseout", () => findEvent("mainTurnUp")());
  }
}
