import { addEvent } from '../util/utility.js';

export function initSlider() {
  const slider = document.querySelector('.slider');
  const sliderCards = document.querySelectorAll('.slider__card');
  const prevBtn = document.querySelector('.chevron--left');
  const nextBtn = document.querySelector('.chevron--right');
  let showIndex = 0;

  addEvent(nextBtn, 'click', showNextCard);
  addEvent(prevBtn, 'click', showPrevCard);

  function showNextCard() {
    const nextIndex = showIndex + 1 <= sliderCards.length - 1 ? showIndex + 1 : 0;

    const currentSlide = slider.querySelector(`[data-index="${showIndex}"]`);
    const nextSlide = slider.querySelector(`[data-index="${nextIndex}"]`);

    currentSlide.dataset.status = 'before';

    nextSlide.dataset.status = 'appear-from-after';

    setTimeout(() => {
      nextSlide.dataset.status = 'show';
      showIndex = nextIndex;
    });
  }

  function showPrevCard() {
    const prevIndex = showIndex - 1 >= 0 ? showIndex - 1 : sliderCards.length - 1;

    const currentSlide = slider.querySelector(`[data-index="${showIndex}"]`);
    const prevSlide = slider.querySelector(`[data-index="${prevIndex}"]`);

    currentSlide.dataset.status = 'after';

    prevSlide.dataset.status = 'appear-from-before';

    setTimeout(() => {
      prevSlide.dataset.status = 'show';
      showIndex = prevIndex;
    });
  }
}
