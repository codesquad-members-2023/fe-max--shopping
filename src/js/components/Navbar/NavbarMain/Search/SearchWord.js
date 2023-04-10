import { Component } from '../../../base/Component.js';

export class SearchWord extends Component {
  constructor() {
    super('search-word', 'UL');
  }

  getTemplate() {
    const test = this.getRecommendTemplate('추천 검색어');
    const history = this.getHistoryTemplate('내가 검색한 단어');

    return history + test;
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
