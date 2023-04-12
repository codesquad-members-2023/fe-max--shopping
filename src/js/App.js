import { Navbar } from '../js/components/Navbar/Navbar.js';
import { Main } from './Main.js';
import { Component } from './components/base/Component.js';

export class App extends Component {
  constructor() {
    super('app');
    this.header = new Navbar();
    this.main = new Main();
    this.init();
  }

  getTemplate() {
    return [this.header.node, this.main.node];
  }
}
