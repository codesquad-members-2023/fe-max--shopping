import { Navbar } from '../js/components/Navbar/Navbar.js';

export class App {
  #node;

  constructor(rootNode) {
    this.#node = rootNode;
    this.init(this.#node);
  }

  init(rootNode) {
    const headerNode = new Navbar().node;
    rootNode.append(headerNode);
  }
}
