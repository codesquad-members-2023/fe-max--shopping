import { $ } from '../../utils.js';

export class RecommendView {
  constructor(data) {
    this.data = data;
    this.render();
  }

  getTemplate(recommend) {
    return `
      ${recommend
        .map(
          keyword => `
            <li class="search-layer__recommended">
              <img class="keyword-btn" src="./src/asset/icons/arrow-top-right.svg" alt="">
              <a href="#">${keyword}</a>
            </li>`
        )
        .join('')}`;
  }

  render() {
    $('.search-layer').insertAdjacentHTML('beforeend', this.getTemplate(this.data));
  }
}
