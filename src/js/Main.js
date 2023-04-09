import { Hero } from './components/Hero.js';
import { Component } from './components/base/Component.js';

export class Main extends Component {
  static #instance;

  static onDimmed() {
    Main.#instance.node.classList.remove('dim-off');
    Main.#instance.node.classList.add('dim-on');
  }

  static offDimmed() {
    Main.#instance.node.classList.remove('dim-on');
    Main.#instance.node.classList.add('dim-off');
  }

  constructor() {
    if (Main.#instance) {
      return Main.#instance;
    }

    super('main', 'MAIN');
    Main.#instance = this;
  }

  getTemplate() {
    const hero = new Hero(6);
    return [hero.node];
  }
}
