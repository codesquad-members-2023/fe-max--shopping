import { Component } from '../base/Component.js';
import { NavbarMain } from '../Navbar/NavbarMain.js';
import { NavbarSub } from '../Navbar/NavbarSub.js';

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
