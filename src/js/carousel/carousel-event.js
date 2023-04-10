import { query, carousel, time } from "../constant.js";
import { delay } from "../util/delay-promise.js";

class Slider {
  constructor() {
    this.counter = carousel.slideCounter;
    this.size = carousel.size;
    this.transition = carousel.slideTransition;
  }

  initSlide() {
    query.slideList.style.transform = `translateX(${-this.counter * this.size}px)`;
  }

  moveToNextSlide() {
    const isLastSlide = this.counter >= query.slideItem.length - 1;
    if (isLastSlide) {
      return;
    }
    query.slideList.style.transition = this.transition;
    this.counter++;
    query.slideList.style.transform = `translateX(${-this.counter * this.size}px)`;
  }

  moveToPrevSlide() {
    const isFirstSlide = this.counter <= 0;
    if (isFirstSlide) {
      return;
    }
    query.slideList.style.transition = this.transition;
    this.counter--;
    query.slideList.style.transform = `translateX(${-this.counter * this.size}px)`;
  }

  moveToOppositeSlide(fakeSlide, realSlide) {
    if (fakeSlide) {
      query.slideList.style.transition = carousel.noEffect;
      this.counter = realSlide;
      query.slideList.style.transform = `translateX(${-this.counter * this.size}px)`;
    }
  }

  firstToLastSlide() {
    const isFakeLastSlide = query.slideItem[this.counter].id === "last-clone";
    const isRealLastSlide = query.slideItem.length - 2;
    this.moveToOppositeSlide(isFakeLastSlide, isRealLastSlide);
  }

  lastToFirstSlide() {
    const isFakeFirstSlide = query.slideItem[this.counter].id === "first-clone";
    const isRealFirstSlide = query.slideItem.length - this.counter;
    this.moveToOppositeSlide(isFakeFirstSlide, isRealFirstSlide);
  }

  teleportSlide() {
    this.firstToLastSlide();
    this.lastToFirstSlide();
  }

  async autoToNextSlide() {
    await delay(time.autoSlideDelay);
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
  query.nextBtn.addEventListener("click", () => {
    carouselSlide.moveToNextSlide();
  });
}

function slidePrevBtnClickEventHandler() {
  query.prevBtn.addEventListener("click", () => {
    carouselSlide.moveToPrevSlide();
  });
}

function slideTransitionendEventHandler() {
  query.slideList.addEventListener("transitionend", () => {
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
