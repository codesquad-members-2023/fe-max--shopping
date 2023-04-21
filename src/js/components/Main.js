import { Hero } from './Hero/Hero.js';
import { Component } from './base/Component.js';
import { DimLayer } from './common/DimLayer.js';

export class Main extends Component {
  constructor() {
    super('main', 'MAIN');
    this.dimLayer = new DimLayer();
    this.hero = new Hero(6);
    this.init();
  }

  onDimmed() {
    this.dimLayer.on();
  }

  offDimmed() {
    this.dimLayer.off();
  }

  getTemplate() {
    return [this.dimLayer.node, this.hero.node];
  }
}
