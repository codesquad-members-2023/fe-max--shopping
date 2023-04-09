import { Navbar } from '../js/components/Navbar/Navbar.js';
import { Main } from './Main.js';
import { Component } from './components/base/Component.js';

export class App extends Component {
  constructor() {
    super('app');
  }

  getTemplate() {
    const header = new Navbar();
    const main = new Main();

    return [header.node, main.node];
  }
}
