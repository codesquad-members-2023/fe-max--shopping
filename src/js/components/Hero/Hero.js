import { sliderStore } from '../../domain/Store.js';
import { Component } from '../base/Component.js';
import { Slider } from './Slider.js';

export class Hero extends Component {
  constructor(slideCount) {
    super('hero');
    this.slideCount = slideCount;
    this.lastIndex = this.slideCount + 1;
    this.currentIndex = 0;
    this.store = sliderStore;
    this.slider = new Slider();
    this.leftButton = new Component('slider-button left', 'BUTTON');
    this.rightButton = new Component('slider-button right', 'BUTTON');
    this.initSlider(this.slideCount, 1);
    this.init();
  }

  async initSlider(slideCount, startIndex) {
    await this.store.requestImages(slideCount);
    const { images } = this.store;
    this.slider.render(images);

    this.currentIndex += startIndex;
    this.slider.initStyle(slideCount, startIndex);
  }

  initEventHandlers() {
    this.moveAutoInterval(10000);
    this.node.addEventListener('transitionend', () => this.cycleSlides());
    this.node.addEventListener('click', ({ target }) => this.moveSlide(target));
  }

  moveAutoInterval(interval) {
    setInterval(() => this.moveToNextSlide(), interval);
  }

  moveSlide(target) {
    if (target.classList.contains('left')) {
      this.moveToPrevSlide();
    }
    if (target.classList.contains('right')) {
      this.moveToNextSlide();
    }
  }

  moveToPrevSlide() {
    if (this.currentIndex <= 0) {
      return;
    }

    this.currentIndex -= 1;
    this.slider.moveToSlide(this.currentIndex);
  }

  moveToNextSlide() {
    if (this.currentIndex >= this.lastIndex) {
      return;
    }

    this.currentIndex += 1;
    this.slider.moveToSlide(this.currentIndex);
  }

  cycleSlides() {
    const isFirstSlide = this.currentIndex === 0;
    const isLastSlide = this.currentIndex === this.lastIndex;

    if (isFirstSlide) {
      this.currentIndex = this.lastIndex - 1;
      this.slider.moveToSlide(this.currentIndex, false);
      return;
    }

    if (isLastSlide) {
      this.currentIndex = 1;
      this.slider.moveToSlide(this.currentIndex, false);
    }
  }

  getTemplate() {
    return [this.slider.node, this.leftButton.node, this.rightButton.node];
  }
}
