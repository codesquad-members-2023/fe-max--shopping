import { Component } from '../../../base/Component.js';

export class SearchWord extends Component {
  constructor({ recommend }) {
    super('search-word', 'UL');
    this.recommendWordList = recommend;
    this.renderSearchWords(this.recommendWordList);
  }

  renderSearchWords(recommendWordList) {
    const template = this.getAllRecommendTemplate(recommendWordList);
    this.node.insertAdjacentHTML('afterbegin', template);
  }

  getAllRecommendTemplate(recommendWordList) {
    const recommendTemplate = recommendWordList.reduce((acc, cur) => {
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
