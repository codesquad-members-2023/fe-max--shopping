import { RecommendAndHistoryRenderer, AutoSearchRenderer } from './renderer.js';

export class View {
  constructor() {
    this.dimBackground = document.querySelector('.dim');
    this.listLayerEl = document.querySelector('.header__search-bar__layer');
    this.inputEl = document.querySelector('.header__search-bar input');
    this.buttonEl = document.querySelector('.header__search-bar__button');
  }

  renderAutoSearchList(autoSearchData, prefix) {
    const autoSearchRenderer = new AutoSearchRenderer(this.listLayerEl, autoSearchData, prefix);
    autoSearchRenderer.render();
  }

  renderRecommendAndHistoryList(totalData) {
    const recommendRenderer = new RecommendAndHistoryRenderer(this.listLayerEl, totalData);
    recommendRenderer.render();
  }

  showSearchList() {
    this.dimBackground.classList.remove('hidden');
    this.listLayerEl.classList.remove('hidden');
  }

  hideSearchList() {
    this.dimBackground.classList.add('hidden');
    this.listLayerEl.classList.add('hidden');
  }

  move(direction) {
    const items = [...this.listLayerEl.querySelectorAll('.search-item')];
    const selectedItemIndex = items.findIndex((item) => item.classList.contains('selected'));

    if (direction === 'UP' && selectedItemIndex > 0) {
      this.moveItemFocus(items[selectedItemIndex], items[selectedItemIndex - 1]);
    } else if (direction === 'DOWN' && selectedItemIndex < items.length - 1) {
      this.moveItemFocus(items[selectedItemIndex], items[selectedItemIndex + 1]);
    }
  }

  moveItemFocus(currentItem, nextItem) {
    if (currentItem) {
      currentItem.classList.remove('selected');
    }
    nextItem.classList.add('selected');
    this.inputEl.value = nextItem.innerText;
  }

  clearInputField() {
    this.inputEl.value = '';
  }
}
