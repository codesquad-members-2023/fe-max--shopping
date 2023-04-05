import { Navbar } from '../js/components/Navbar/Navbar.js';

export class App {
  constructor(rootNode) {
    this.node = rootNode;
    this.init();
  }

  init() {
    const headerNode = new Navbar().node;
    this.node.append(headerNode);
  }
}
