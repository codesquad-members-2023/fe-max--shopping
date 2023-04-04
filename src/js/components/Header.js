import { Navbar } from './Navbar/Navbar.js';

export class Header {
  constructor() {
    this.node = new Navbar().node;
  }
}
