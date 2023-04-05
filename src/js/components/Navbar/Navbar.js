import { Component } from '../base/Component.js';

export class Navbar extends Component {
  constructor(navbarMain, navbarSub) {
    super('navbar', 'HEADER');
    this.node.append(navbarMain, navbarSub);
  }
}
