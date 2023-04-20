import { Component } from '../base/Component.js';
import { DimLayer } from '../common/DimLayer.js';
import Main from './Main.js';

export default class Sidebar extends Component {
  constructor() {
    super('sidebar', 'ASIDE');
    this.main = new Main();
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
    this.main.disappear();
    this.dimLayer.off();
    setTimeout(() => this.node.classList.remove('active'), 300);
  }

  open() {
    this.main.appear();
    this.dimLayer.on();
    this.node.classList.add('active');
  }

  getTemplate() {
    return [this.main.node, this.closeButton.node, this.dimLayer.node];
  }
}
