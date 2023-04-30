import { Component } from '../base/Component.js';
import { DimLayer } from '../common/DimLayer.js';
import { Content } from './Content/Content.js';
import { Hero } from './Hero/Hero.js';

export class Main extends Component {
  constructor() {
    super('main', 'MAIN');
    this.dimLayer = new DimLayer();
    this.hero = new Hero({ slideCount: 6 });
    this.content = new Content();
    this.init();
  }

  onDimmed() {
    this.dimLayer.on();
  }

  offDimmed() {
    this.dimLayer.off();
  }

  getTemplate() {
    return [this.dimLayer.node, this.hero.node, this.content.node];
  }
}
