import { $, $All } from '../utils/domUtils.js';

const MAX_INDEX = $All('.hero__item').length - 1;
const AUTO_SLIDE_WAITTIME = 10000;
const PREV_ITEM = true;
const NEXT_ITEM = false;

let activeIndex = 0;
let autoSlideTimer = setInterval(() => slideTo(NEXT_ITEM), AUTO_SLIDE_WAITTIME);

export function initHero() {
  $('.hero__btn--prev').addEventListener('click', handlePrevBtnClick);
  $('.hero__btn--next').addEventListener('click', handleNextBtnClick);
}

function handlePrevBtnClick() {
  clearInterval(autoSlideTimer);
  slideTo(PREV_ITEM);
  autoSlideTimer = setInterval(() => slideTo(NEXT_ITEM), AUTO_SLIDE_WAITTIME);
}

function handleNextBtnClick() {
  clearInterval(autoSlideTimer);
  slideTo(NEXT_ITEM);
  autoSlideTimer = setInterval(() => slideTo(NEXT_ITEM), AUTO_SLIDE_WAITTIME);
}

function slideTo(itemDirection) {
  const nextIndex = getNextIndex(itemDirection);
  const { currentItemStatus, nextItemStatus } = getItemsStatus(itemDirection);

  const currentItem = $(`.hero__item[data-index="${activeIndex}"]`);
  const nextItem = $(`.hero__item[data-index="${nextIndex}"]`);

  nextItem.style.transition = 'none';
  nextItem.dataset.status = nextItemStatus;
  
  setTimeout(() => {
    nextItem.style.transition = '';
    currentItem.dataset.status = currentItemStatus;
    nextItem.dataset.status = 'active';
    activeIndex = nextIndex;
  }, 5);
}

function getNextIndex(isPrevItem) {
  if (isPrevItem) {
    return activeIndex - 1 >= 0 ? activeIndex - 1 : MAX_INDEX;
  } 
  return activeIndex + 1 <= MAX_INDEX ? activeIndex + 1 : 0;
}

function getItemsStatus(isPrevItem) {
  return {
    currentItemStatus: isPrevItem ? 'right' : 'left',
    nextItemStatus: isPrevItem ? 'left' : 'right'
  }
}
