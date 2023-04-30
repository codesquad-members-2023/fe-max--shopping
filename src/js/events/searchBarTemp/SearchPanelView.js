import { $ } from '../../utils/dom.js';
import { SearchHistoryManager } from './SearchHistoryManagerTemp.js';
import { handleDimming, layerOpenState } from '../../utils/dim.js';
import { NUMBER } from '../../constants/number.js';

const searchPanel = $('.search-panel');
const searchBarInput = document.searchForm.searchBar;

export class SearchPanelView {
    constructor() {
      this.activeIndex = -1;
  
      this.searchHistoryManager = new SearchHistoryManager();
    }
  
    storeInputTerms(e) {
      if (e.keyCode !== NUMBER.enterKeyCode) { //
        return;
      }
  
      e.preventDefault();
      const value = e.target.value.trim();
  
      if (!value) {
        return;
      }
  
      this.searchHistoryManager.addSearch(value);
    }
  
    deleteSearchTerm(e) {
      if (e.target.nodeName !== 'IMG') {
        return;
      }
      const searchTerm = e.target.closest('li').innerText;
      this.searchHistoryManager.deleteSearch(searchTerm);
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
      this.setInputValue();
    }
  
    setInputValue() {
      if (this.activeIndex === -1) {
        return;
      }
      const searchResults = this.getSearchResultLists();
      searchBarInput.value = searchResults[this.activeIndex].innerText;
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