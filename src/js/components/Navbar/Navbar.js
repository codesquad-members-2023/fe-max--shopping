import { Component } from '../base/Component.js';
import { NavbarMain } from './NavbarMain.js';
import { NavbarSub } from './NavbarSub.js';

export class Navbar extends Component {
  constructor() {
    super('navbar', 'HEADER');
    this.mainNode = new NavbarMain().node;
    this.subNode = new NavbarSub().node;
    this.node.append(this.mainNode, this.subNode);
  }
}
