import { Component } from '../../../base/Component.js';

export class SearchPanel extends Component {
  constructor(state, storage) {
    super('search-panel', 'UL');
    this.storage = storage;
    this.state = state;
    this.selectedItem = null;
    this.init(this.state);
  }

  getTemplate(state) {
    const { history, recommend } = state;
    const historyView = this.getAllHistoryTemplate(history);
    const recommendView = this.getAllRecommendTemplate(recommend);

    return historyView + recommendView;
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
    this.storage.deleteSearchWord(targetItem.dataset.id);
    targetItem.remove();
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
    if (!history) {
      return '';
    }
    const historyInfo = Object.entries(history).slice(-5);
    const historyTemplate = historyInfo.reduce((acc, cur) => {
      const historyId = cur[0];
      const historyWord = cur[1];
      return acc + this.getHistoryTemplate(historyId, historyWord);
    }, '');

    return historyTemplate;
  }

  getAllRecommendTemplate(recommend) {
    const recommendTemplate = recommend.reduce((acc, cur) => {
      return acc + this.getRecommendTemplate(cur);
    }, '');

    return recommendTemplate;
  }

  getRecommendTemplate(word) {
    return `
<li class="recommend">
  <a href="#"><button class="shortcut-btn"></button>${word}</a>
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
