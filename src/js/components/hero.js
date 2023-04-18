import { $, $All } from '../utils/domUtils.js';
import { API_URL } from '../utils/constants.js';

const AUTO_SLIDE_WAITTIME = 10000;
const WAITTIME_FOR_NEXT_ITEM = 50;
const PREV_ITEM = true;
const NEXT_ITEM = false;

let activeIndex;
let autoSlideTimer;

export async function initHero() {
  const images = await getImageUrls();
  const items = images.map(createHeroItemsWithImage);

  $('.hero__slide').insertAdjacentHTML('beforeend', items.join(''));

  const renderedItems = $All('.hero__item');
  initAutoSlide(renderedItems);
  initHeroEvent(renderedItems);
}

function getImageUrls() {
  const url = new URL('carouselImages', API_URL);
  return fetch(url)
    .then((res) => res.json())
    .catch(console.error);
}

function createHeroItemsWithImage(image, index) {
  const state = index === 0 ? 'active' : 'inactive';
  return `<li class="hero__item" data-index="${index}" data-status="${state}">
    <img src="${image.imageUrl}" alt="${image.description}" />
  </li>`;
}

function initAutoSlide(items) {
  activeIndex = 0;
  autoSlideTimer = setInterval(() => slideTo(NEXT_ITEM, items), AUTO_SLIDE_WAITTIME);
}

function initHeroEvent(items) {
  $('.hero__btn--prev').addEventListener('click', () => {
    handlePrevBtnClick(items);
  });
  $('.hero__btn--next').addEventListener('click', () => {
    handleNextBtnClick(items);
  });
}

function handlePrevBtnClick(items) {
  clearInterval(autoSlideTimer);
  slideTo(PREV_ITEM, items);
  autoSlideTimer = setInterval(() => slideTo(NEXT_ITEM), AUTO_SLIDE_WAITTIME);
}

function handleNextBtnClick(items) {
  clearInterval(autoSlideTimer);
  slideTo(NEXT_ITEM, items);
  autoSlideTimer = setInterval(() => slideTo(NEXT_ITEM), AUTO_SLIDE_WAITTIME);
}

function slideTo(itemDirection, items) {
  const nextIndex = getNextIndex(itemDirection, items.length - 1);
  const { currentItemStatus, nextItemStatus } = getItemsStatus(itemDirection);
  const { currentItem, nextItem } = findCurrentAndNextItems(items, activeIndex, nextIndex);

  nextItem.style.transition = 'none';
  nextItem.dataset.status = nextItemStatus;

  setTimeout(() => {
    nextItem.style.transition = '';
    currentItem.dataset.status = currentItemStatus;
    nextItem.dataset.status = 'active';
    activeIndex = nextIndex;
  }, WAITTIME_FOR_NEXT_ITEM);
}

function getNextIndex(isPrevItem, maxIndex) {
  if (isPrevItem) {
    return activeIndex === 0 ? maxIndex : activeIndex - 1;
  }
  return activeIndex === maxIndex ? 0 : activeIndex + 1;
}

function getItemsStatus(isPrevItem) {
  return {
    currentItemStatus: isPrevItem ? 'right' : 'left',
    nextItemStatus: isPrevItem ? 'left' : 'right',
  };
}

function findCurrentAndNextItems(items, activeIndex, nextIndex) {
  const result = {};
  for (const item of items) {
    if (item.dataset.index === activeIndex.toString()) {
      result.currentItem = item;
      continue;
    }
    if (item.dataset.index === nextIndex.toString()) {
      result.nextItem = item;
      continue;
    }
  }
  return result;
}
