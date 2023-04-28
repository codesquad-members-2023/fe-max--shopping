import { highlightText } from '../../../../utils/index.js';
import { Component } from '../../../base/Component.js';

export class SearchPanel extends Component {
  constructor() {
    super('search-panel', 'UL');
    this.selectedItem = null;
  }

  getTemplate(info) {
    const { keywords, history, value } = info;
    const historyView = this.getAllHistoryTemplate(history);
    const keywordsView = this.getAllKeywordTemplate(keywords, value);

    return `${historyView}${keywordsView}`;
  }

  onKeyDown(key) {
    if (!this.selectedItem) {
      this.selectedItem = this.node.firstElementChild;
      this.selectedItem.classList.add('selected');
      return this.selectedItem.textContent.trim();
    }

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

  close() {
    this.node.classList.remove('active');
  }

  getAllHistoryTemplate(history) {
    const historyInfo = Object.entries(history).slice(-5);
    const historyTemplate = historyInfo.reduce((acc, cur) => {
      const historyId = cur[0];
      const historyWord = cur[1];
      return acc + this.getHistoryTemplate(historyId, historyWord);
    }, '');

    return historyTemplate;
  }

  getAllKeywordTemplate(keywords, value) {
    const keywordsTemplate = keywords.reduce((acc, cur) => {
      return acc + this.getKeywordTemplate(cur, value);
    }, '');

    return keywordsTemplate;
  }

  getKeywordTemplate(keyword, value) {
    return `
<li class="keyword">
  <a href="#"><button class="shortcut-btn"></button><span>${highlightText(
    keyword,
    value
  )}</span></a>
</li>
    `;
  }

  getHistoryTemplate(id, word) {
    return `
<li data-id="${id}" class="history">
  <a href="#">${word}</a><button class="delete-btn"></button>
</li>
    `;
  }
}
