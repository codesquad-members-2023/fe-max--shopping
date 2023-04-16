import { Component } from '../base/Component.js';
import { Slider } from './Slider.js';

export class Hero extends Component {
  static autoIntervalSecs = 10;
  static transitionSecs = 0.5;
  static startIndex = 1;

  constructor(slideCount) {
    super('hero');
    this.slideCount = slideCount;
    this.lastIndex = this.slideCount + 1;
    this.currentIndex = 0;
    this.slider = new Slider(this.slideCount);
    this.leftButton = new Component('slider-button left', 'BUTTON');
    this.rightButton = new Component('slider-button right', 'BUTTON');
    this.initSlider(Hero.startIndex);
    this.init();
  }

  initSlider(startIndex) {
    this.currentIndex += startIndex;
    this.slider.node.style.transform = `translateX(-${this.currentIndex * 100}vw)`;
  }

  initEventHandlers() {
    this.moveAutoInterval(Hero.autoIntervalSecs * 1000);
    this.slider.node.addEventListener('transitionend', () => this.cycleSlides());
    this.leftButton.node.addEventListener('click', () => this.moveToPrevSlide());
    this.rightButton.node.addEventListener('click', () => this.moveToNextSlide());
  }

  moveAutoInterval(interval) {
    setInterval(() => this.moveToNextSlide(), interval);
  }

  moveToPrevSlide() {
    if (this.currentIndex <= 0) {
      return;
    }

    this.currentIndex -= 1;
    this.moveToSlide(this.currentIndex);
  }

  moveToNextSlide() {
    if (this.currentIndex >= this.lastIndex) {
      return;
    }

    this.currentIndex += 1;
    this.moveToSlide(this.currentIndex);
  }

  cycleSlides() {
    const isFirstSlide = this.currentIndex === 0;
    const isLastSlide = this.currentIndex === this.lastIndex;

    if (isFirstSlide) {
      this.currentIndex = this.lastIndex - 1;
      this.moveToSlide(this.currentIndex, false);
      return;
    }

    if (isLastSlide) {
      this.currentIndex = 1;
      this.moveToSlide(this.currentIndex, false);
    }
  }

  moveToSlide(slideIndex, withTransition = true) {
    this.slider.node.style.transform = `translateX(-${slideIndex * 100}vw)`;
    this.slider.node.style.transition = withTransition
      ? `transform ${Hero.transitionSecs}s ease-in-out`
      : 'none';
  }

  getTemplate() {
    return [this.slider.node, this.leftButton.node, this.rightButton.node];
  }
}
