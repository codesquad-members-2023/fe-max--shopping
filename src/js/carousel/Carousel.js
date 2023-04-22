import { querySelector } from "../query.js";
import { CAROUSEL, TIME } from "../constant.js";
import { delay } from "../util/delay.js";

class Slider {
  constructor() {
    this.counter = CAROUSEL.SLIDE_COUNTER;
    this.size = CAROUSEL.SIZE;
    this.transition = CAROUSEL.SLIDE_TRANSITION;
  }

  getCalcTransform() {
    return `translateX(${-this.counter * this.size}px)`;
  }
}

export class SliderMover extends Slider {
  constructor() {
    super();
  }

  initSlide() {
    querySelector.slideList().style.transform = this.getCalcTransform();
  }

  moveToBesideSlide(isEdgeSide, isPlus) {
    if (isEdgeSide) {
      return;
    }
    querySelector.slideList().style.transition = this.transition;
    this.counter = isPlus ? this.counter + 1 : this.counter - 1;
    querySelector.slideList().style.transform = this.getCalcTransform();
  }

  moveToNextSlide() {
    const lastIndex = querySelector.slideItems().length - 1;
    const isLastSlide = this.counter >= lastIndex;
    this.moveToBesideSlide(isLastSlide, true);
  }

  moveToPrevSlide() {
    const firstIndex = 0;
    const isFirstSlide = this.counter <= firstIndex;
    this.moveToBesideSlide(isFirstSlide, false);
  }

  moveToOppositeSlide(isFakeSlide, realSlide) {
    if (isFakeSlide) {
      querySelector.slideList().style.transition = CAROUSEL.NO_EFFECT;
      this.counter = realSlide;
      querySelector.slideList().style.transform = this.getCalcTransform();
    }
  }

  firstToLastSlide() {
    const lastIndexWithoutFake = 2;
    const isFakeLastSlide = querySelector.slideItems()[this.counter].id === "last-clone";
    const isRealLastSlide = querySelector.slideItems().length - lastIndexWithoutFake;
    this.moveToOppositeSlide(isFakeLastSlide, isRealLastSlide);
  }

  lastToFirstSlide() {
    const isFakeFirstSlide = querySelector.slideItems()[this.counter].id === "first-clone";
    const isRealFirstSlide = querySelector.slideItems().length - this.counter;
    this.moveToOppositeSlide(isFakeFirstSlide, isRealFirstSlide);
  }

  teleportSlide() {
    this.firstToLastSlide();
    this.lastToFirstSlide();
  }

  async autoToNextSlide() {
    await delay(TIME.AUTO_SLIDE_DELAY);
    this.moveToNextSlide();
    this.autoToNextSlide();
  }
}
