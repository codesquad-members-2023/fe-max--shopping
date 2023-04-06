import { Navbar } from '../js/components/Navbar/Navbar.js';
import { Main } from './Main.js';
import { Component } from './components/base/Component.js';
import { DimLayer } from './components/element/DimLayer.js';

export class App extends Component {
  constructor() {
    super('app');
  }

  template() {
    const dimLayer = new DimLayer();
    const header = new Navbar();
    const main = new Main();

    return [dimLayer.node, header.node, main.node];
  }
}
