import { Component } from '../base/Component.js';
import { NavbarMain } from './NavbarMain/NavbarMain.js';
import { NavbarSub } from './NavbarSub/NavbarSub.js';

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
