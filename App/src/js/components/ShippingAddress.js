import { findEvent } from "../utils/factory.js";
import { Component } from "./Component.js";

export class ShippingAddress extends Component {
  constructor(component) {
    super();
    this.restructure(component);
  }

  setEvent() {
    this.domNode.addEventListener("mouseover", () => findEvent("mainDim")());
    this.domNode.addEventListener("mouseout", () => findEvent("mainTurnUp")());
  }
}
