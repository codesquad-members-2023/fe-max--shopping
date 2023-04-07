import { Component } from './base/Component.js';

export class Hero extends Component {
  static autoIntervalSecs = 10000;
  static transitionSecs = 0.5;

  constructor(slideCount) {
    super('hero');
    this.currentIndex = 0;
    this.slider = this.$('.slider');
    this.initSlider(this.slider, slideCount);
  }

  initEventHandlers() {
    this.moveAutoInterval(Hero.autoIntervalSecs);
    this.$('.left').addEventListener('click', () => this.moveToPrevSlide());
    this.$('.right').addEventListener('click', () => this.moveToNextSlide());
  }

  moveAutoInterval(interval) {
    setInterval(() => this.moveToNextSlide(), interval);
  }

  moveToPrevSlide() {
    this.currentIndex -= 1;
    this.moveSlide(this.currentIndex);
  }

  moveToNextSlide() {
    this.currentIndex += 1;
    this.moveSlide(this.currentIndex);
  }

  moveSlide(currentIndex) {
    this.slider.style.transform = `translateX(-${currentIndex * 100}vw)`;
    this.slider.style.transition = `all ${Hero.transitionSecs}s ease-in-out`;
  }

  initSlider(slider, slideCount) {
    this.setSliderWidth(slider, slideCount);
    this.appendSlides(slider, slideCount);
  }

  setSliderWidth(slider, slideCount) {
    slider.style.width = `${slideCount * 100}vw`;
  }

  appendSlides(slider, slideCount) {
    const slideNodes = this.makeSlideNodes(slideCount);
    slider.append(...slideNodes);
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
