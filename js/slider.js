import { setEvent } from './utility.js';

export function initSlider() {
  const sliderCards = document.querySelectorAll('.slider__card');
  const prevBtn = document.querySelector('.chevron--left');
  const nextBtn = document.querySelector('.chevron--right');
  let showIndex = 0;

  setEvent(nextBtn, 'click', showNextCard);
  setEvent(prevBtn, 'click', showPrevCard);

  function showNextCard() {
    const nextIndex = showIndex + 1 <= sliderCards.length - 1 ? showIndex + 1 : 0;

    const currentSlide = document.querySelector(`[data-index="${showIndex}"]`);
    const nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);

    currentSlide.dataset.status = 'before';

    nextSlide.dataset.status = 'appear-from-after';

    setTimeout(() => {
      nextSlide.dataset.status = 'show';
      showIndex = nextIndex;
    });
  }

  function showPrevCard() {
    const prevIndex = showIndex - 1 >= 0 ? showIndex - 1 : sliderCards.length - 1;

    const currentSlide = document.querySelector(`[data-index="${showIndex}"]`);
    const prevSlide = document.querySelector(`[data-index="${prevIndex}"]`);

    currentSlide.dataset.status = 'after';

    prevSlide.dataset.status = 'appear-from-before';

    setTimeout(() => {
      prevSlide.dataset.status = 'show';
      showIndex = prevIndex;
    });
  }
}
