import { NavbarMain } from '../Navbar/NavbarMain/NavbarMain.js';
import { NavbarSub } from '../Navbar/NavbarSub.js';
import { Component } from '../base/Component.js';

export class Navbar extends Component {
  constructor() {
    super('navbar', 'HEADER');
    this.navbarMain = new NavbarMain();
    this.navbarSub = new NavbarSub();
    this.init();
  }

  getTemplate() {
    return [this.navbarMain.node, this.navbarSub.node];
  }
}
