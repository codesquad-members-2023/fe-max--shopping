import { $, $All } from '../utils/domUtils.js';

const MAX_INDEX = $All('.hero__item').length - 1;
let activeIndex = 0;

function initHero() {
  $('.hero__btn--next').addEventListener('click', slideToNextItem);
  $('.hero__btn--prev').addEventListener('click', slideToPrevItem);
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

export { initHero };
