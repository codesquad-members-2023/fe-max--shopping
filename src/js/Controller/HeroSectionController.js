import { HeroSliderView } from '../View/Hero/HeroSliderView.js';
import { HeroBtnView } from '../View/Hero/HeroBtnView.js';
import { $ } from '../utils.js';

export class HeroSectionController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.setEvent();
    this.initHeroSlider();
  }

  async initHeroSlider() {
    new HeroSliderView(await this.model.getHeroImg());
    new HeroBtnView(await this.model.getHeroImg());
    this.cloneSlide();
    this.setDefaultStyle();
  }

  setEvent() {
    $('.hero-section').addEventListener('click', (event) => {
      const target = event.target;
      const isPrevBtn = target.classList.contains("prev") || target.id === "hero-prev-btn";
      const isNextBtn = target.classList.contains("next") || target.id === "hero-next-btn";
      
      switch (true) {
        case isPrevBtn:
          this.movePrevSlide();
          break;
        case isNextBtn:
          this.moveNextSlide();
          break;
      }
    });
  }

  cloneSlide() {
    const heroSlider = $('.hero-slider');
    const slides = heroSlider.querySelectorAll('li');
    const clonedFirstSlide = slides[0].cloneNode(true);
    const clonedLastSlide = slides[slides.length - 1].cloneNode(true);
    heroSlider.insertBefore(clonedLastSlide, slides[0]);
    heroSlider.appendChild(clonedFirstSlide);
  }

  setDefaultStyle() {
    const heroSlider = $('.hero-slider');
    heroSlider.style.width = `${this.model.widthOfSlider}px`;
    this.model.currentIndex = 1;
    this.model.transform -= this.model.widthOfSlide;
    heroSlider.style.transform = `translateX(${this.model.transform}px)`;
  };

  movePrevSlide() {
    const heroSlider = $('.hero-slider');
    this.model.transform += this.model.widthOfSlide;
    this.model.currentIndex -= 1;
    heroSlider.style.transform = `translateX(${this.model.transform}px)`;
  }

  moveNextSlide() {
    const heroSlider = $('.hero-slider');
    this.model.transform -= this.model.widthOfSlide;
    this.model.currentIndex += 1;
    heroSlider.style.transform = `translateX(${this.model.transform}px)`;
  }
}
