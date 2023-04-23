import { $ } from '../../utils/dom.js';
import { SearchHistoryManager } from "./SearchHistoryManager.js";
import { handleDimming, layerOpenState } from '../../utils/dim.js';
const searchPanel = $('.search-panel');

export class SearchPanelHandler {
    constructor() {
      this.activeIndex = -1;
      this.searchHistoryManager = new SearchHistoryManager();
    }
  
    storeInputTerms(e) {
      if (e.keyCode !== 13) return;
      if (e.keyCode === 13) {
        e.preventDefault();
        const value = e.target.value.trim();
  
        if (value) {
          this.searchHistoryManager.addSearch(value);
        }
      }
    }
  
    deleteSearchTerm(e) {
      if (e.target.nodeName === 'IMG') {
        const searchTerm = e.target.closest('li').innerText;
        const searchHistory =
          JSON.parse(localStorage.getItem('searchHistory')) || [];
        const updatedSearchHistory = searchHistory.filter(
          item => item !== searchTerm
        );
        localStorage.setItem(
          'searchHistory',
          JSON.stringify(updatedSearchHistory)
        );
  
        return true;
      }
    }
  
    setActiveClass() {
      const searchResults = this.getSearchResultLists();
      searchResults.forEach((result, index) => {
        if (index === this.activeIndex) {
          result.classList.add('active');
          result.style.backgroundColor = 'yellow';
        } else {
          result.classList.remove('active');
          result.style.backgroundColor = '';
        }
      });
    }
  
    keyboardNavigationHandler(e) {
      if (e.key === 'ArrowDown') {
        this.handleArrowDown();
      } else if (e.key === 'ArrowUp') {
        this.handleArrowUp();
      } else {
        this.activeIndex = -1;
      }
  
      this.setActiveClass();
    }
  
    handleArrowDown() {
      const searchResults = this.getSearchResultLists();
  
      this.activeIndex += 1;
      if (this.activeIndex >= searchResults.length) {
        this.activeIndex = 0;
      }
    }
  
    handleArrowUp() {
      const searchResults = this.getSearchResultLists();
  
      this.activeIndex -= 1;
      if (this.activeIndex < 0) {
        this.activeIndex = searchResults.length - 1;
      }
    }
    getSearchResultLists() {
      return searchPanel.querySelectorAll('li');
    }
  
    toggleSearchPanel(e, isPanelOpen) {
      layerOpenState.searchPanel = isPanelOpen;
      if (isPanelOpen) {
        searchPanel.classList.remove('hidden');
        handleDimming();
      } else if (!e.target.closest('.main-search-bar')) {
        searchPanel.classList.add('hidden');
        handleDimming();
      }
    }
  }