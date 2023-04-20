import { Slider } from "./Carousel.js";
import { querySelector } from "../query.js";

function initSliding(slide) {
  document.addEventListener("DOMContentLoaded", () => {
    slide.initSlide();
  });
}

function autoNextSlide(slide) {
  document.addEventListener("DOMContentLoaded", () => {
    slide.autoToNextSlide();
  });
}

function toNextSlide(slide) {
  querySelector.nextBtn().addEventListener("click", () => {
    slide.moveToNextSlide();
  });
}

function toPrevSlide(slide) {
  querySelector.prevBtn().addEventListener("click", () => {
    slide.moveToPrevSlide();
  });
}

function toOppositeSlide(slide) {
  querySelector.slideList().addEventListener("transitionend", () => {
    slide.teleportSlide();
  });
}

export function addEventOnCarousel() {
  const carouselSlide = new Slider();

  initSliding(carouselSlide);
  autoNextSlide(carouselSlide);
  toNextSlide(carouselSlide);
  toPrevSlide(carouselSlide);
  toOppositeSlide(carouselSlide);
}
