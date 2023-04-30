import { $ } from '../Utils.js';
import { HistoryView } from '../View/SearchBar/HistoryView.js';
import { RecommendView } from '../View/SearchBar/RecommendView.js';

export class SearchBarController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.setEvent();
    this.initKeyword();
  }

  async initKeyword() {
    new HistoryView(await this.model.getHistory());
    new RecommendView(await this.model.getRecommend());
  }

  setEvent() {
    $('.search-bar').addEventListener('focus', this.focusSearchBar.bind(this));
    $('.search-bar').addEventListener('focusout', this.focusoutSearchBar.bind(this));
  }

  focusSearchBar() {
    this.model.focusInSearchBar();
    this.view.update(this.model.isFocus);
  }

  focusoutSearchBar() {
    this.model.focusOutSearchBar();
    this.view.update(this.model.isFocus);
  }
}
