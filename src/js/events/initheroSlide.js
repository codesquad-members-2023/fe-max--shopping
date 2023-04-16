import { $, $All } from '../utils/dom.js';
const slideContainer = $('.hero');
const slideButtonLayout = $('.slide-buttons-layout');
const slide = $('.slide-banner');

let index = 1;
let slideId;

function getSlides() {
  return $All('.slide-item');
}
export function initHeroSlide() {
  const slides = getSlides();
  const firstClone = slides[0].cloneNode(true);
  const lastClone = slides[slides.length - 1].cloneNode(true);

  firstClone.id = 'first-clone';
  lastClone.id = 'last-clone';

  slide.append(firstClone);
  slide.prepend(lastClone);

  setSlidePosition(slides);
  slideshowControls();
  handleSlideTransitionEnd({ firstClone, lastClone });
}

function setSlidePosition(slides) {
  const slideWidth = slides[index].clientWidth;
  slide.style.transform = `translateX(${-slideWidth * index}px)`;
}

function slideshowControls() {
  startSlide();
  pauseOnHover();
  slideButtonLayout.addEventListener('click', e => {
    if (e.target.matches('.prev')) {
      moveToNextOrPrevSlide('prev');
    }
    if (e.target.matches('.next')) {
      moveToNextOrPrevSlide('next');
    }
  });
}

function startSlide() {
  slideId = setInterval(() => {
    moveToNextOrPrevSlide('next');
  }, 3000);
}

function pauseOnHover() {
  slideContainer.addEventListener('mouseenter', () => {
    clearInterval(slideId);
  });
  slideContainer.addEventListener('mouseleave', startSlide);
}

function moveToNextOrPrevSlide(direction) {
  const slides = getSlides();
  if (direction === 'prev') {
    if (index <= 0) return;
    index -= 1;
    slide.style.transition = '.5s ease-out';
    setSlidePosition(slides);
  }
  if (direction === 'next') {
    if (index >= slides.length - 1) return;
    index += 1;
    slide.style.transition = '.5s ease-out';
    setSlidePosition(slides);
  }
}

function handleSlideTransitionEnd({ firstClone, lastClone }) {
  slide.addEventListener('transitionend', () => {
    const slides = getSlides();
    if (slides[index].id === firstClone.id) {
      slide.style.transition = 'none';
      index = 1;
      setSlidePosition(slides);
    }

    if (slides[index].id === lastClone.id) {
      slide.style.transition = 'none';
      index = slides.length - 2;
      setSlidePosition(slides);
    }
  });
}
