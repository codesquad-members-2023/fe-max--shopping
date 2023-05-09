import { $ } from '../../utils.js';

export class HeroBtnView {
  constructor(data) {
    this.data = data;
    this.render();
  }

  getTemplate(heroImgs) {
    return heroImgs.btn.map(
      btn => `
        <button class="${btn.class}"><img src="${btn.src}" alt=""></button>
      `
    )
    .join('');
  }

  render() {
    $('.hero-section').insertAdjacentHTML('beforeend', this.getTemplate(this.data));
  }
}
