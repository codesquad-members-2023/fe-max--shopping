import { Component } from '../../../core/Component.js';

export class SearchLayer extends Component {
  getTemplate() {
    const recommend = [];
    const history = [];
    for (const keyword of this.state[0].recommend) {
      recommend.push(this.getRecommend(keyword));
    }
    for (const keyword of this.state[0].history) {
      if (this.state[0].history === []) return;
      history.push(this.getHistory(keyword));
    }
    return `
      <ul class="search-layer hidden">
        ${history.join('')}
        ${recommend.join('')}
      </ul>`;
  }

  getRecommend(keyword) {
    return `
    <li class="search-layer__recommended">
      <img class="keyword-btn" src="./src/asset/icons/arrow-top-right.svg" alt="">
      <a href="#">${keyword}</a>
    </li>`;
  }

  getHistory(keyword) {
    return `
    <li class="search-layer__history">
      <a href="#">${keyword}</a>
      <img class="delete-btn" src="./src/asset/icons/close.svg" alt="">
    </li>`;
  }
}
