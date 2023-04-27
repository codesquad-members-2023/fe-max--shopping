import { fetchDataAll } from '../../utils/dataUtils.js';

export class SearchModel {
  constructor() {
    this.searchText = '';
    this.recentSearches = [];
    this.recommendSearches = [];
  }

  get SearchText() {
    return this.searchText;
  }

  set SearchText(value) {
    this.searchKeyword = value;
  }

  fetchDefaultData(updateView) {
    fetchDataAll('recentSearches', 'recommends')
    .then((data) => {
      [this.recentSearches, this.recommendSearches] = data;
      updateView(this.recentSearches, this.recommendSearches);
    })
  }
}