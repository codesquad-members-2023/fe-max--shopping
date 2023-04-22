import { querySelector } from "../query.js";

export function initSliding(slide) {
  document.addEventListener("DOMContentLoaded", () => {
    slide.initSlide();
  });
}

export function autoNextSlide(slide) {
  document.addEventListener("DOMContentLoaded", () => {
    slide.autoToNextSlide();
  });
}

export function toNextSlide(slide) {
  querySelector.nextBtn().addEventListener("click", () => {
    slide.moveToNextSlide();
  });
}

export function toPrevSlide(slide) {
  querySelector.prevBtn().addEventListener("click", () => {
    slide.moveToPrevSlide();
  });
}

export function toOppositeSlide(slide) {
  querySelector.slideList().addEventListener("transitionend", () => {
    slide.teleportSlide();
  });
}
