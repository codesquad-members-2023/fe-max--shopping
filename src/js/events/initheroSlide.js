import { $ } from '../utils/dom.js';

let slideId;
let index = 1;

const getSlides = () => document.querySelectorAll('.slide-item');

function initSlideShow() {
  const slide = $('.slide-banner');
  let slides = getSlides();

  const firstClone = slides[0].cloneNode(true);
  const lastClone = slides[slides.length - 1].cloneNode(true);

  firstClone.id = 'first-clone';
  lastClone.id = 'last-clone';

  appendAndPrependClones({ slide, firstClone, lastClone });
  setSlideInitialPosition({ slides, slide });
  handleSlideTransitionEnd({ slide, firstClone, lastClone });
}

function setSlideInitialPosition({ slides, slide }) {
  const slideWidth = slides[index].clientWidth;
  slide.style.transform = `translateX(${-slideWidth * index}px)`;
}

function appendAndPrependClones({ slide, firstClone, lastClone }) {
  slide.append(firstClone);
  slide.prepend(lastClone);
}

function startSlide() {
  slideId = setInterval(() => {
    moveToNextSlide();
  }, 3000);
}

function handleSlideTransitionEnd({ slide, firstClone, lastClone }) {
  slide.addEventListener('transitionend', () => {
    let slides = getSlides();
    if (slides[index].id === firstClone.id) {
      slide.style.transition = 'none';
      index = 1;
      setSlideInitialPosition({ slides, slide });
    }

    if (slides[index].id === lastClone.id) {
      slide.style.transition = 'none';
      index = slides.length - 2;
      setSlideInitialPosition({ slides, slide });
    }
  });
}

const moveToNextSlide = () => {
  const slide = $('.slide-banner');
  let slides = getSlides();
  if (index >= slides.length - 1) return;
  index += 1;
  slide.style.transition = '.5s ease-out';
  setSlideInitialPosition({ slides, slide });
};

const moveToPreviousSlide = () => {
  const slide = $('.slide-banner');
  let slides = getSlides();
  if (index <= 0) return;
  index -= 1;
  slide.style.transition = '.5s ease-out';
  setSlideInitialPosition({ slides, slide });
};

function pauseOnHover() {
  const slideContainer = $('.hero');
  slideContainer.addEventListener('mouseenter', () => {
    clearInterval(slideId);
  });

  slideContainer.addEventListener('mouseleave', startSlide);
}

function slideNavigation() {
  const slideButtonLayout = $('.slide-buttons-layout');
  slideButtonLayout.addEventListener('click', moveToNextOrPrevSlide);
}

function moveToNextOrPrevSlide(e) {
  if (e.target.matches('.next')) {
    moveToNextSlide();
  }
  if (e.target.matches('.prev')) {
    moveToPreviousSlide();
  }
}

function slideshowControls() {
  pauseOnHover();
  slideNavigation();
}

export { initSlideShow, startSlide, slideshowControls };
