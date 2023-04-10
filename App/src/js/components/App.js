import { Component } from "./Component.js";

export class App extends Component {
  constructor(innerData) {
    super();
    this.domNode = document.querySelector("#app");
    this.children = [];
    this.parseJsonRecursiveAppendChild(innerData.header);
    this.parseJsonRecursiveAppendChild(innerData.sidebar);
  }
}
