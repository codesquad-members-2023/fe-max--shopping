import { Component } from '../base/Component.js';
import { DimLayer } from '../common/DimLayer.js';
import Menu from './Menu.js';

export default class Sidebar extends Component {
  constructor() {
    super('sidebar', 'ASIDE');
    this.menu = new Menu();
    this.closeButton = new Component('close-button', 'BUTTON');
    this.dimLayer = new DimLayer();
    this.dimLayer.on();
    this.init();
  }

  getTemplate() {
    return [this.menu.node, this.closeButton.node, this.dimLayer.node];
  }
}
