import { Component } from './base/Component.js';

export class Hero extends Component {
  static slideCount = 6;

  constructor() {
    super('hero');
    this.slider = this.$('.slider');
    this.setSliderWidth(this.slider, Hero.slideCount);
    this.appendSlides(this.slider, Hero.slideCount);
  }

  appendSlides(slider, slideCount) {
    const slides = this.makeSlideNodes(slideCount);
    slider.append(...slides);
  }

  setSliderWidth(slider, slideCount) {
    slider.style.width = `${slideCount * 100}vw`;
  }

  makeSlideNodes(slideCount) {
    const imageNames = this.makeImageNames(slideCount);
    const slideNodes = imageNames.map((imageName) => new Slide(imageName).node);
    return slideNodes;
  }

  makeImageNames(slideCount) {
    return Array.from({ length: slideCount }).map((_, index) => `hero-${index + 1}.jpg`);
  }

  template() {
    return `
<ul class="slider"></ul>
<button class="slider-button left"></button>
<button class="slider-button right"></button>
    `;
  }
}

class Slide extends Component {
  static __dirname = '/src/assets/images/banner/';

  constructor(imageName) {
    super('slide', 'LI');
    this.node.style.backgroundImage = `url(${Slide.__dirname}${imageName})`;
  }
}
