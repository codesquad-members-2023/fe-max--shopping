import { QUERY, CAROUSEL, TIME } from "../constant.js";
import { delay } from "../util/delay-promise.js";

class Slider {
  constructor() {
    this.counter = CAROUSEL.SLIDE_COUNTER;
    this.size = CAROUSEL.SIZE;
    this.transition = CAROUSEL.SLIDE_TRANSITION;
  }

  getCalcTransform() {
    return `translateX(${-this.counter * this.size}px)`;
  }

  initSlide() {
    QUERY.SLIDE_LIST.style.transform = this.getCalcTransform();
  }

  moveToBesideSlide(isEdgeSide, isPlus) {
    if (isEdgeSide) {
      return;
    }
    QUERY.SLIDE_LIST.style.transition = this.transition;
    this.counter = isPlus ? this.counter + 1 : this.counter - 1;
    QUERY.SLIDE_LIST.style.transform = this.getCalcTransform();
  }

  moveToNextSlide() {
    const lastIndex = QUERY.SLIDE_ITEMS.length - 1;
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
      QUERY.SLIDE_LIST.style.transition = CAROUSEL.NO_EFFECT;
      this.counter = realSlide;
      QUERY.SLIDE_LIST.style.transform = this.getCalcTransform();
    }
  }

  firstToLastSlide() {
    const lastIndexWithoutFake = 2;
    const isFakeLastSlide = QUERY.SLIDE_ITEMS[this.counter].id === "last-clone";
    const isRealLastSlide = QUERY.SLIDE_ITEMS.length - lastIndexWithoutFake;
    this.moveToOppositeSlide(isFakeLastSlide, isRealLastSlide);
  }

  lastToFirstSlide() {
    const isFakeFirstSlide = QUERY.SLIDE_ITEMS[this.counter].id === "first-clone";
    const isRealFirstSlide = QUERY.SLIDE_ITEMS.length - this.counter;
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

const carouselSlide = new Slider();

function slideLoadEventHandler() {
  document.addEventListener("DOMContentLoaded", () => {
    carouselSlide.initSlide();
  });
}

function slideNextBtnClickEventHandler() {
  // bind 공부하기
  QUERY.NEXT_BTN.addEventListener("click", carouselSlide.moveToNextSlide.bind(carouselSlide));
}

function slidePrevBtnClickEventHandler() {
  QUERY.PREV_BTN.addEventListener("click", () => {
    carouselSlide.moveToPrevSlide();
  });
}

function slideTransitionendEventHandler() {
  QUERY.SLIDE_LIST.addEventListener("transitionend", () => {
    carouselSlide.teleportSlide();
  });
}

function slideAutoEventHandler() {
  document.addEventListener("DOMContentLoaded", () => {
    carouselSlide.autoToNextSlide();
  });
}

export {
  slideLoadEventHandler,
  slideNextBtnClickEventHandler,
  slidePrevBtnClickEventHandler,
  slideTransitionendEventHandler,
  slideAutoEventHandler,
};
