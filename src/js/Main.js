import { Hero } from './components/Hero.js';
import { Component } from './components/base/Component.js';

export class Main extends Component {
  constructor() {
    super('main', 'MAIN');
  }

  template() {
    const hero = new Hero();
    return [hero.node];
  }
}
