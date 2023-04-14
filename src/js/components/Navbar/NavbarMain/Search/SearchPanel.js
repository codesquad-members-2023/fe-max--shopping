import { model } from '../../../../domain/model.js';
import { Component } from '../../../base/Component.js';

export class SearchPanel extends Component {
  constructor({ recommend, history }) {
    super('search-panel', 'UL');
    this.recommendWords = recommend;
    this.history = history;
    this.init();
    this.selectedItem = this.node.firstElementChild;
  }

  initEventHandlers() {
    this.node.addEventListener('click', ({ target }) => {
      if (target.matches('.delete-btn')) {
        this.deleteItem(target);
      }
    });
  }

  deleteItem(target) {
    const targetItem = target.closest('li');
    model.deleteSearchWord(targetItem.dataset.id);
    targetItem.remove();
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

  close() {
    this.node.classList.remove('active');
  }

  getTemplate() {
    const historyView = this.getAllHistoryTemplate(this.history);
    const recommendView = this.getAllRecommendTemplate(this.recommendWords);
    return historyView + recommendView;
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

  getHistoryTemplate(id, word) {
    return `
<li data-id="${id}" class="history">
  <a href="">${word}</a><button class="delete-btn"></button>
</li>
    `;
  }
}
