import { $, $All } from '../utils/domUtils.js';

const MAX_INDEX = $All('.hero__item').length - 1;
const AUTO_SLIDE_WAITTIME = 10000;
let activeIndex = 0;
let autoSlideTimer = setInterval(slideToNextItem, AUTO_SLIDE_WAITTIME);

function initHero() {
  $('.hero__btn--prev').addEventListener('click', handlePrevBtnClick);
  $('.hero__btn--next').addEventListener('click', handleNextBtnClick);
}

function handlePrevBtnClick() {
  clearInterval(autoSlideTimer);
  slideToPrevItem();
  autoSlideTimer = setInterval(slideToNextItem, AUTO_SLIDE_WAITTIME);
}

function handleNextBtnClick() {
  clearInterval(autoSlideTimer);
  slideToNextItem();
  autoSlideTimer = setInterval(slideToNextItem, AUTO_SLIDE_WAITTIME);
}

function slideToPrevItem() {
  const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : MAX_INDEX;

  const currentItem = $(`.hero__item[data-index="${activeIndex}"]`);
  const nextItem = $(`.hero__item[data-index="${nextIndex}"]`);

  currentItem.dataset.status = 'right';
  nextItem.style.transition = 'none';
  nextItem.dataset.status = 'left';

  setTimeout(() => {
    nextItem.style.transition = '';
    nextItem.dataset.status = 'active';
    activeIndex = nextIndex;
  });
}

function slideToNextItem() {
  const nextIndex = activeIndex + 1 <= MAX_INDEX ? activeIndex + 1 : 0;

  const currentItem = $(`.hero__item[data-index="${activeIndex}"]`);
  const nextItem = $(`.hero__item[data-index="${nextIndex}"]`);

  currentItem.dataset.status = 'left';
  nextItem.style.transition = 'none';
  nextItem.dataset.status = 'right';

  setTimeout(() => {
    nextItem.style.transition = '';
    nextItem.dataset.status = 'active';
    activeIndex = nextIndex;
  });
}

export { initHero };
