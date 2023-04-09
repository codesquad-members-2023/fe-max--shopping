import { Hero } from './components/Hero.js';
import { Component } from './components/base/Component.js';
import { DimLayer } from './components/element/DimLayer.js';

export class Main extends Component {
  static #instance;

  static onDimmed() {
    Main.#instance.$('.dim-layer').classList.add('active');
  }

  static offDimmed() {
    Main.#instance.$('.dim-layer').classList.remove('active');
  }

  constructor() {
    if (Main.#instance) {
      return Main.#instance;
    }

    super('main', 'MAIN');
    Main.#instance = this;
  }

  getTemplate() {
    const dimLayer = new DimLayer();
    const hero = new Hero(6);
    return [dimLayer.node, hero.node];
  }
}
