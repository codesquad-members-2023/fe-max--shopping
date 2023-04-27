export class SearchHistoryManager {
  constructor() {
    this.searchHistory =
      JSON.parse(localStorage.getItem('searchHistory')) || [];
  }

  // addSearch(value) {
  //   const searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
  //   if (this.isDuplicate(value, searchHistory)) {
  //     return;
  //   } else {
  //     searchHistory.push(value);
  //     // this.searchHistory.push(value);
  //     // localStorage.setItem('searchHistory', JSON.stringify(this.searchHistory));
  //     localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
  //   }
  // }
  addSearch(value) {
    const searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
    if (this.isDuplicate(value, searchHistory)) {
      return;
    } else {
      searchHistory.push(value);
      localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
    }
  }

  isDuplicate(value, searchHistory) {
    return searchHistory.some(el => el === value);
    // return this.searchHistory.some(el => el === value);
  }

  deleteSearch(searchTerm){
    const searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
    const updatedSearchHistory = searchHistory.filter( item => item !== searchTerm );
    localStorage.setItem('searchHistory', JSON.stringify(updatedSearchHistory));
  }
}
