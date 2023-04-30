import { $ } from '../../Utils.js';

export class HistoryView {
  constructor(data) {
    this.data = data;
    this.render();
  }

  getTemplate(history) {
    if (history === []) return;
    return `
      ${history
        .map(
          keyword => `
            <li class="search-layer__history">
              <a href="#">${keyword}</a>
              <img class="delete-btn" src="./src/asset/icons/close.svg" alt="">
            </li>`
        )
        .join('')}`;
  }

  render() {
    $('.search-layer').insertAdjacentHTML('beforeend', this.getTemplate(this.data));
  }
}
