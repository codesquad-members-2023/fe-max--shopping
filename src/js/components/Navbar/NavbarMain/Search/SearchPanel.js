import { Component } from '../../../base/Component.js';

export class SearchPanel extends Component {
  constructor({ recommend }) {
    super('search-panel', 'UL');
    this.recommendWords = recommend;
    this.init();
    this.selectedItem = this.node.firstElementChild;
  }

  onKeyDown(key) {
    this.moveToFollowingItem(key);
    return this.selectedItem.textContent.trim();
  }

  moveToFollowingItem(key) {
    const isArrowDownKey = key === 'ArrowDown';
    let followingItem = isArrowDownKey
      ? this.selectedItem.nextElementSibling
      : this.selectedItem.previousElementSibling;

    if (!followingItem) {
      isArrowDownKey
        ? (followingItem = this.node.firstElementChild)
        : (followingItem = this.node.lastElementChild);
    }

    this.changeSelectedItem(followingItem);
  }

  changeSelectedItem(followingItem) {
    this.selectedItem.classList.remove('selected');
    this.selectedItem = followingItem;
    this.selectedItem.classList.add('selected');
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
