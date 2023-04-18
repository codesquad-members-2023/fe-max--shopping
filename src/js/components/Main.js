import { Hero } from './Hero/Hero.js';
import { Component } from './base/Component.js';
import { DimLayer } from './common/DimLayer.js';

export class Main extends Component {
  static #instance;

  constructor() {
    if (Main.#instance) {
      return Main.#instance;
    }

    super('main', 'MAIN');
    this.dimLayer = new DimLayer();
    this.hero = new Hero(6);
    this.init();
    Main.#instance = this;
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
