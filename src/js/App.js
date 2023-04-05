import { Navbar } from '../js/components/Navbar/Navbar.js';
import { DimLayer } from './components/element/DimLayer.js';

export class App {
  #node;

  constructor(rootNode) {
    this.#node = rootNode;
    this.dimLayerNode = new DimLayer().node;
    this.headerNode = new Navbar(this.dimLayer).node;
    this.render();
  }

  render() {
    this.#node.append(this.dimLayerNode, this.headerNode);
  }
}
