// import { $ } from '../Utils.js';
import { HeroSliderView } from '../View/Hero/HeroSliderView.js';
import { HeroBtnView } from '../View/Hero/HeroBtnView.js';

export class HeroSectionController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.initHeroSlider();
  }

  async initHeroSlider() {
    new HeroSliderView(await this.model.getHeroImg());
    new HeroBtnView(await this.model.getHeroImg());
  }
}
