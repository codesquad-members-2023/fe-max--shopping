import { Component } from '../base/Component.js';
import { NavbarMain } from './NavbarMain/NavbarMain.js';
import { NavbarSub } from './NavbarSub/NavbarSub.js';

export class Navbar extends Component {
  constructor(sidebar) {
    super('navbar', 'HEADER');
    this.navbarMain = new NavbarMain();
    this.navbarSub = new NavbarSub();
    this.sidebar = sidebar;
    this.init();
  }

  initEventHandlers() {
    this.node.addEventListener('click', ({ target }) => this.handleClick(target));
  }

  handleClick(target) {
    const isHamburgerMenu = target.closest('.hamburger-menu');

    if (isHamburgerMenu) {
      this.sidebar.open();
    }
  }

  getTemplate() {
    return [this.navbarMain.node, this.navbarSub.node];
  }
}
