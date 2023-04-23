export class SearchHistoryManager {
  constructor() {
    this.history = JSON.parse(localStorage.getItem('searchHistory')) || [];
  }

  addSearch(value) {
    if (this.isDuplicate(value)) {
      return;
    } else {
      this.history.push(value);
      localStorage.setItem('searchHistory', JSON.stringify(this.history));
    }
  }

  isDuplicate(value) {
    return this.history.some(el => el === value);
  }
}
