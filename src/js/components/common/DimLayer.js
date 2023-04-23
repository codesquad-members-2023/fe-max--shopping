import { Component } from '../base/Component.js';

export class DimLayer extends Component {
  constructor() {
    super('dim-layer');
    this.init();
  }

  on() {
    this.node.classList.add('active');
  }

  off() {
    this.node.classList.remove('active');
  }

  getTemplate() {
    return '';
  }
}
