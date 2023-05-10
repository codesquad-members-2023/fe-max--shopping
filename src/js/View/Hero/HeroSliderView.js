import { $ } from '../../utils.js';

export class HeroSliderView {
  constructor(data) {
    this.data = data;
    this.render();
  }

  getTemplate(heroImgs) {
    return `
      <ul class="hero-slider">
        ${heroImgs.slider
          .map(
            src => `<li><img src="${src}" alt=""></li>`
          )
          .join('')}
      </ul>
    `;
  }

  render() {
    $('.hero-section').insertAdjacentHTML('beforeend', this.getTemplate(this.data));
  }
}
