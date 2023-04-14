import { Component } from '../../../base/Component.js';

export class SearchPanel extends Component {
  constructor(state, model) {
    super('search-panel', 'UL');
    this.model = model;
    this.render(state);
  }

  render(state) {
    this.recommendWords = state.recommend;
    this.history = state.history;
    this.init(state);
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
    this.model.deleteSearchWord(targetItem.dataset.id);
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

  getTemplate({
    recommend, history
  }) {
    const historyView = this.getAllHistoryTemplate(history);
    const recommendView = this.getAllRecommendTemplate(recommend);
    return historyView + recommendView;
  }

  getAllHistoryTemplate(history) {
    const historyWords = Object.entries(history).slice(-5);
    const historyTemplate = historyWords.reduce((acc, cur) => {
      return acc + this.getHistoryTemplate(cur[0], cur[1]);
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


function test() {
  let isDeleteSearchWordCalled = false
  const model = {
    deleteSearchWord: (...args) => {
      // console.log('deleteSearchWord called!', ...args);
      isDeleteSearchWordCalled = true;
    }
  }
  const searchPanel = new SearchPanel(state, model);
  searchPanel.deleteItem();

  if (!isDeleteSearchWordCalled) {
    throw new Error('isDeleteSearchWordCalled not called');
  }
}