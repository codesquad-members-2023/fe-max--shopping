import { Navbar } from '../js/components/Navbar/Navbar.js';
import { Main } from './components/Main/Main.js';
import Sidebar from './components/Sidebar/Sidebar.js';

export class App {
  #node;

  constructor(rootNode) {
    this.#node = rootNode;
    this.sidebar = new Sidebar();
    this.main = new Main();
    this.header = new Navbar(this.sidebar, this.main);
    this.render();
  }

  render() {
    this.#node.append(this.header.node, this.sidebar.node, this.main.node);
  }
}
