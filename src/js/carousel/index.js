import {
  initSliding,
  autoNextSlide,
  toNextSlide,
  toPrevSlide,
  toOppositeSlide,
} from "./Carousel-event.js";
import { SliderMover } from "./Carousel.js";

export function addEventOnCarousel() {
  const carouselSlide = new SliderMover();

  initSliding(carouselSlide);
  autoNextSlide(carouselSlide);
  toNextSlide(carouselSlide);
  toPrevSlide(carouselSlide);
  toOppositeSlide(carouselSlide);
}
