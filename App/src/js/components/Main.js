import { addEvent } from "../utils.js";
import { Component } from "./Component.js";

export class Main extends Component {
  constructor({ domNode, children }) {
    super();
    this.domNode = domNode;
    this.children = children;

    addEvent("mainDim", this.dim.bind(this))
    addEvent("mainTurnUp", this.turnUp.bind(this))
  }

  dim() {
    const dimmed = this.domNode.querySelector(".dimmed");
    dimmed.className = "dimmed active"
  }

  turnUp() {
    const dimmed = this.domNode.querySelector(".dimmed");
    dimmed.className = "dimmed"
  }
}
