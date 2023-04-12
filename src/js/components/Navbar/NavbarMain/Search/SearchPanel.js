import { Component } from '../../../base/Component.js';

export class SearchPanel extends Component {
  constructor({ recommend }) {
    super('search-panel', 'UL');
    this.recommendWords = recommend;
    this.init();
  }

  open() {
    this.node.classList.add('active');
  }

  getTemplate() {
    return this.getAllRecommendTemplate(this.recommendWords);
  }

  getAllRecommendTemplate(recommendWords) {
    const recommendTemplate = recommendWords.reduce((acc, cur) => {
      return acc + this.getRecommendTemplate(cur);
    }, '');

    return recommendTemplate;
  }

  getRecommendTemplate(word) {
    return `
<li class="recommend">
  <a href=""><button class="shortcut-btn"></button>${word}</a>
</li>
    `;
  }

  getHistoryTemplate(word) {
    return `
<li class="history">
  <a href="">${word}</a><button class="delete-btn"></button>
</li>
    `;
  }
}
