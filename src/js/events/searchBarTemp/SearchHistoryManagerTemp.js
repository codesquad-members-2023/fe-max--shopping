export class SearchHistoryManager {
  constructor() {
    this.searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
  }

  addSearch(value) {
    if (this.isDuplicate(value)) {
      return;
    } else {
      this.searchHistory.push(value);
      localStorage.setItem('searchHistory', JSON.stringify(this.searchHistory));
    }
  }

  isDuplicate(value) {
    return this.searchHistory.some(el => el === value);
  }
}
