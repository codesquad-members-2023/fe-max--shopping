import { Header } from './components/Header.js';

export class App {
  constructor(node) {
    this.node = node;
    this.headerNode = new Header().node;
    this.node.append(this.headerNode);
  }

  init() {}
}
