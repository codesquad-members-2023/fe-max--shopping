import { NavbarMain } from '../Navbar/NavbarMain/NavbarMain.js';
import { NavbarSub } from '../Navbar/NavbarSub.js';
import { Component } from '../base/Component.js';

export class Navbar extends Component {
  constructor() {
    super('navbar', 'HEADER');
  }

  template() {
    const navbarMainNode = new NavbarMain().node;
    const navbarSubNode = new NavbarSub().node;

    return [navbarMainNode, navbarSubNode];
  }
}
