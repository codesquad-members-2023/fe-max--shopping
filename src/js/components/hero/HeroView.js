import { $, createElement } from '../../utils/domUtils.js';

export class HeroView {
  constructor() {
    this.hero = $('.hero');
    this.slide = createElement('ul', { class: 'hero__slide' });
    this.prevButton = createElement('button', { class: 'hero__btn--prev' });
    this.nextButton = createElement('button', { class: 'hero__btn--next' });

    this.render();
  }

  render() {
    this.hero.innerHTML = '';
    this.hero.append(this.slide, this.prevButton, this.nextButton);
  }

  init(images) {
    const items = images.map(this.createImageTemplate).join('');
    this.slide.innerHTML = items;
    this.render();
  }

  updateImages(images) {
    for (let i = 0; i < images.length; i++) {
      this.slide.children[i].dataset.status = images[i].status;
    }
  }

  createImageTemplate(image, index) {
    return `<li class="hero__item" data-index="${index}" data-status="${image.status}">
      <img src="${image.imageUrl}" alt="${image.description}" />
    </li>`;
  }

  setPrevButtonEventHandler(handler) {
    this.prevButton.addEventListener('click', handler);
  }

  setNextButtonEventHandler(handler) {
    this.nextButton.addEventListener('click', handler);
  }
}
