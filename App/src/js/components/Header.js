import { Component } from "./Component.js";

export class Header extends Component {
  constructor({ domNode, children }) {
    super();
    this.domNode = domNode;
    this.children = children;
  }
}
