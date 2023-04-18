import { Navbar } from '../js/components/Navbar/Navbar.js';
import { Main } from './components/Main.js';
import Sidebar from './components/Sidebar/Sidebar.js';
import { Component } from './components/base/Component.js';

export class App extends Component {
  constructor() {
    super('app');
    this.header = new Navbar();
    this.sidebar = new Sidebar();
    this.main = new Main();
    this.init();
  }

  getTemplate() {
    return [this.header.node, this.sidebar.node, this.main.node];
  }
}
