import { Component } from "./Component.js";

export class Main extends Component {
  constructor({ domNode, children }) {
    super();
    this.domNode = domNode;
    this.children = children;
  }

  dimToggle() {
    const dimmed = this.domNode.querySelector(".dimmed");
    const hidden = dimmed.hidden;
    dimmed.hidden = hidden ? false : true;
  }

  load() {
    this.dimToggle()
  }
}
