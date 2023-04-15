import { $, addOverClassIfAbsent, removeOverClass } from '../../utils/domUtils.js';
import { HistoryListBuilder, RecommendListBuilder } from './SuggestionListBuilder.js';

export class SearchSuggestion {
  constructor() {
    this.init();
    this.setEventHandlers();
  }

  init() {
    this.element = $('.search-layer__suggestion');
    this.children = this.element.children;
    this.historyListBuilder = new HistoryListBuilder();
    this.recommendListBuilder = new RecommendListBuilder();
    this.selectedIndex = -1;
  }

  setEventHandlers() {
    this.element.addEventListener('mouseover', (event) => addOverClassIfAbsent(event.target));
    this.element.addEventListener('mouseout', (event) => removeOverClass(event.target));
  }

  async setSuggestion() {
    const suggestion = await this.createSuggestion();
    this.renderSuggestion(suggestion);
  }

  async createSuggestion() {
    const historyLists = await this.historyListBuilder.createTotalList();
    const recommendLists = await this.recommendListBuilder.createTotalList();

    return [...historyLists, ...recommendLists].reduce((o, n) => o + n, '');
  }

  renderSuggestion(suggestion) {
    this.element.insertAdjacentHTML('beforeend', suggestion);
  }

  async emptyResults() {
    const resultList = this.element;
    while (resultList.firstElementChild) {
      await resultList.removeChild(resultList.firstElementChild);
    }
  }

  moveToBelowSuggestion() {
    const curr = this.selectedIndex;
    const next = this.selectedIndex + 1;

    if (curr === -1) {
      addOverClassIfAbsent(this.children[next]);
    } else if (curr === this.children.length - 1) {
      removeOverClass(this.children[curr]);
      this.selectedIndex = -1;
      return;
    } else {
      removeOverClass(this.children[curr]);
      addOverClassIfAbsent(this.children[next]);
    }
    this.selectedIndex = next;
  }

  moveToAboveSuggestion() {
    const curr = this.selectedIndex;
    const next = this.selectedIndex - 1;

    if (curr === -1) {
      addOverClassIfAbsent(this.children[this.children.length - 1]);
      this.selectedIndex = this.children.length - 1;
      return;
    } else if (curr === 0) {
      removeOverClass(this.children[curr]);
      this.selectedIndex = -1;
      return;
    } else {
      removeOverClass(this.children[curr]);
      addOverClassIfAbsent(this.children[next]);
    }
    this.selectedIndex = next;
  }
}
