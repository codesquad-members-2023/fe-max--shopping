import { Component } from '../base/Component.js';
import { DimLayer } from '../common/DimLayer.js';
import Main from './Main.js';

export default class Sidebar extends Component {
  constructor() {
    super('sidebar', 'ASIDE');
    this.menu = new Main();
    this.closeButton = new Component('close-button', 'BUTTON');
    this.dimLayer = new DimLayer();
    this.init();
  }

  initEventHandlers() {
    this.node.addEventListener('click', ({ target }) => this.handleClick(target));
  }

  handleClick(target) {
    const isCloseBtn = target.closest('.close-button');
    if (isCloseBtn) {
      this.close();
    }
  }

  close() {
    this.node.classList.remove('active');
    this.menu.disappear();
    this.dimLayer.off();
  }

  open() {
    this.node.classList.add('active');
    this.menu.appear();
    this.dimLayer.on();
  }

  getTemplate() {
    return [this.menu.node, this.closeButton.node, this.dimLayer.node];
  }
}
