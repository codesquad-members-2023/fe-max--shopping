import { Navbar } from './Navbar/Navbar.js';
import { NavbarMain } from './Navbar/NavbarMain.js';
import { NavbarSub } from './Navbar/NavbarSub.js';

export class Header {
  constructor() {
    this.mainNode = new NavbarMain().node;
    this.subNode = new NavbarSub().node;
    this.node = new Navbar(this.mainNode, this.subNode).node;
  }
}
