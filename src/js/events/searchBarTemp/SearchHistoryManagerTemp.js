export class SearchHistoryManager {
  addSearch(value) {
    const searchHistory =
      JSON.parse(localStorage.getItem('searchHistory')) || [];
    if (this.isDuplicate(value, searchHistory)) {
      return;
    } else {
      searchHistory.push(value);
      localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
    }
  }

  isDuplicate(value, searchHistory) {
    return searchHistory.some(el => el === value);
  }

  deleteSearch(searchTerm) {
    const searchHistory =
      JSON.parse(localStorage.getItem('searchHistory')) || [];
    const updatedSearchHistory = searchHistory.filter(
      item => item !== searchTerm
    );
    localStorage.setItem('searchHistory', JSON.stringify(updatedSearchHistory));
  }
}
