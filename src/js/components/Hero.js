import { Component } from './base/Component.js';

export class Hero extends Component {
  static autoIntervalSecs = 10000;
  static transitionSecs = 0.5;
  static direction = { left: 'left', right: 'right' };

  constructor(slideCount) {
    super('hero');
    this.slideCount = slideCount;
    this.lastIndex = this.slideCount + 1;
    this.currentIndex = 0;
    this.moveDirection;
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
    if (!this.isValidIndex(this.currentIndex)) {
      return;
    }

    this.moveDirection = Hero.direction.left;
    this.cycleSlides(this.moveDirection);

    this.currentIndex -= 1;
    this.moveToSlide(this.currentIndex);
  }

  moveToNextSlide() {
    if (!this.isValidIndex(this.currentIndex)) {
      return;
    }

    this.moveDirection = Hero.direction.right;
    this.cycleSlides(this.moveDirection);

    this.currentIndex += 1;
    this.moveToSlide(this.currentIndex);
  }

  isValidIndex(slideIndex) {
    return slideIndex >= 0 && slideIndex <= this.lastIndex;
  }

  cycleSlides(moveDirection) {
    if (moveDirection === Hero.direction.left && this.currentIndex === 0) {
      this.currentIndex = this.lastIndex;
      return;
    }

    if (moveDirection === Hero.direction.right && this.currentIndex === this.lastIndex) {
      this.currentIndex = 0;
    }
  }

  moveToSlide(slideIndex) {
    this.slider.style.transform = `translateX(-${slideIndex * 100}vw)`;
    this.slider.style.transition = `all ${Hero.transitionSecs}s ease-in-out`;
  }

  initSlider(slider, slideCount) {
    this.setSliderWidth(slider, slideCount);
    this.appendSlides(slider, slideCount);
    this.renderSlideClone();
  }

  setSliderWidth(slider, slideCount) {
    slider.style.width = `${(slideCount + 2) * 100}vw`;
  }

  appendSlides(slider, slideCount) {
    const slideNodes = this.makeSlideNodes(slideCount);
    slider.append(...slideNodes);
  }

  renderSlideClone() {
    const firstSlide = this.slider.firstElementChild;
    const lastSlide = this.slider.lastElementChild;
    const firstClone = firstSlide.cloneNode(true);
    const lastClone = lastSlide.cloneNode(true);

    this.slider.prepend(lastClone);
    this.slider.append(firstClone);
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
