import { $ } from '../utils.js';

const heroSlider = $('.hero-slider');
const slides = heroSlider.querySelectorAll('li');
const clonedSlides = slides.length + 2;
const widthOfSlide = slides[0].clientWidth;
const widthOfSlider = widthOfSlide * clonedSlides;
const SPEED_TIME = 500;
let currentIdx = 0;
let translate = 0;

export const heroController = () => {
  cloneSlide();
  setDefaultStyle();
  $('.prev').addEventListener('click', movePrevSlide);
  $('.next').addEventListener('click', moveNextSlide);
};

const cloneSlide = () => {
  const clonedFirstSlide = slides[0].cloneNode(true);
  const clonedLastSlide = slides[slides.length - 1].cloneNode(true);
  heroSlider.insertBefore(clonedLastSlide, slides[0]);
  heroSlider.appendChild(clonedFirstSlide);
};

const setDefaultStyle = () => {
  heroSlider.style.width = `${widthOfSlider}px`;
  currentIdx = 1;
  translate = -widthOfSlide;
  heroSlider.style.transform = `translateX(${translate}px)`;
};

const movePrevSlide = () => {
  currentIdx -= 1;
  translate += widthOfSlide;
  heroSlider.style.transform = `translateX(${translate}px)`;
  heroSlider.style.transition = `all ${SPEED_TIME}ms ease`;
  if (currentIdx === 0) {
    setTimeout(() => {
      heroSlider.style.transition = 'none';
      currentIdx = clonedSlides - 2;
      translate = -(widthOfSlide * currentIdx);
      heroSlider.style.transform = `translateX(${translate}px)`;
    }, SPEED_TIME);
  }
};

const moveNextSlide = () => {
  currentIdx += 1;
  translate -= widthOfSlide;
  heroSlider.style.transform = `translateX(${translate}px)`;
  heroSlider.style.transition = `all ${SPEED_TIME}ms ease`;
  if (currentIdx === clonedSlides - 1) {
    setTimeout(() => {
      heroSlider.style.transition = 'none';
      currentIdx = 1;
      translate = -widthOfSlide;
      heroSlider.style.transform = `translateX(${translate}px)`;
    }, SPEED_TIME);
  }
};
