import { PATH } from '../constants/path.js';
import { $, $All } from '../utils/dom.js';
import { shuffleArray } from '../utils/shuffleArray.js';
import { JSONClient } from './api/api.js';
import { TemplateGenerator } from '../events/search/TemplateGenerator.js';
const slideContainer = $('.hero');
const slideButtonLayout = $('.slide-buttons-layout');
const slide = $('.slide-banner');
const slideBanner = document.querySelector('.slide-banner');

let index = 1;
let slideId;
let setTime = 10000;

async function fetchJson(key) {
  const jSONClient = new JSONClient(key);
  const data = await jSONClient.getSlideData();
  return data;
}

function getSlides() {
  return $All('.slide-item');
}

async function selectSlides() {
  const slidesData = await fetchJson(PATH.slides);
  const selectedSlides = shuffleArray(slidesData).slice(0, 3);
  return selectedSlides;
}

async function getSlideTemplate() {
  const templateGenerator = new TemplateGenerator();
  const template = templateGenerator.generateSlides(await selectSlides());
  return template;
}
async function slideRenderer() {
  slideBanner.innerHTML = await getSlideTemplate();
}

export async function initHeroSlide() {
  await slideRenderer();
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
  const slideWidth = slides[index].scrollWidth;
  slide.style.transform = `translateX(${-(slideWidth * index)}px)`;
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
  }, setTime);
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
