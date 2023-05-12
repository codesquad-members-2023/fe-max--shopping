import { debounce } from '../../util/utility.js';

export class SearchController {
  constructor(model, view1, view2, fetcher) {
    this.HOST_KEY = 'localhost:5050';
    this.domElements = {};

    this.model = model;
    this.fetcher = fetcher;
    this.barView = view1;
    this.layerView = view2;

    this.layerView.render(this.loadInitialData());
    this.barView.onEvent((e) => {
      this.handleEvent(e);
    });
    this.setDOMElements();
    this.model.registerObserver(this.barView);
    this.model.registerObserver(this.layerView);
  }

  loadInitialData() {
    return this.fetcher //
      .get(this.HOST_KEY, 'searchDB')
      .then((data) => this.model.saveInitialData(data));
  }

  passDomElements(...args) {
    args.forEach((el) => {
      this.domElements[el.id] = el;
    });
  }

  setDOMElements() {
    const $searchForm = document.querySelector('.search-bar__form');
    const $searchBarInput = document.querySelector('.search-bar__input');
    const $searchLayer = document.querySelector('.search-bar__layer');
    const $backdrop = document.querySelector('.modal__backdrop');

    this.passDomElements($searchForm, $searchBarInput, $searchLayer, $backdrop);
  }

  handleEvent(e) {
    e.stopPropagation();

    switch (e.type) {
      case 'click':
        this.clickHandler();
        break;

      case 'blur':
        this.blurHandler();
        break;

      case 'keydown':
        this.keydownHandler(e);
        break;

      case 'submit':
        this.submitHandler(e);
        break;

      case 'input':
        debounce(this.inputHandler(e));
        break;

      default:
        break;
    }
  }

  clickHandler() {
    this.domElements.searchLayer.classList.add('show');
    this.domElements.navBackdrop.classList.add('show');
    this.model.focusIndex = -1;
  }

  blurHandler() {
    const focusEl = document.querySelector(`[data-index="${this.model.focusIndex}"]`);

    this.domElements.searchLayer.classList.remove('show');
    this.domElements.navBackdrop.classList.remove('show');
    if (focusEl) {
      focusEl.classList.remove('selected');
    }
  }

  keydownHandler(e) {
    const lists = document.querySelectorAll('.search-bar__result');

    if (e.key === 'ArrowDown') {
      this.model.focusIndex = this.model.focusIndex + 1 <= lists.length - 1 ? this.model.focusIndex + 1 : 0;
      const prevIndex = this.model.focusIndex - 1 < 0 ? lists.length - 1 : this.model.focusIndex - 1;

      const prevFocusEl = lists[prevIndex];
      const currentFocusEl = lists[this.model.focusIndex];

      prevFocusEl.classList.remove('selected');
      currentFocusEl.classList.add('selected');

      this.model.inputBarValue = currentFocusEl.innerText;
      this.model.notifySearchBar();
    }

    if (e.key === 'ArrowUp') {
      if (this.model.focusIndex === -1) {
        this.model.focusIndex = lists.length - 1;

        const currentFocusEl = lists[this.model.focusIndex];
        currentFocusEl.classList.add('selected');

        this.model.inputBarValue = currentFocusEl.innerText;
        this.model.notifySearchBar();
        return;
      }

      this.model.focusIndex = this.model.focusIndex - 1 >= 0 ? this.model.focusIndex - 1 : lists.length - 1;
      const prevIndex = this.model.focusIndex + 1 > lists.length - 1 ? 0 : this.model.focusIndex + 1;

      const prevFocusEl = lists[prevIndex];
      const currentFocusEl = lists[this.model.focusIndex];

      prevFocusEl.classList.remove('selected');
      currentFocusEl.classList.add('selected');

      this.model.inputBarValue = currentFocusEl.innerText;
      this.model.notifySearchBar();
    }
  }

  submitHandler = (e) => {
    e.preventDefault();

    const searchHistoryData = this.model.searchData.searchHistory;
    const recentSearchWord = e.target.searchbar.value;
    const newId = searchHistoryData.length ? searchHistoryData[searchHistoryData.length - 1].id + 1 : 1;

    const newData = {
      id: newId,
      content: recentSearchWord,
    };

    searchHistoryData.push(newData);
    this.model.notifySearchLayer();
    const reqBody = { id: 'searchHistory', content: searchHistoryData };
    this.fetcher //
      .put(this.HOST_KEY, 'searchDB/searchHistory', reqBody);
  };

  inputHandler = (e) => {
    const inputValue = e.target.value;

    if (inputValue === '') {
      this.layerView.render(this.model.searchData);
      return;
    }
    this.fetcher //
      .get(this.HOST_KEY, 'searchDB/autoSuggestion')
      .then((autoSuggestionData) => {
        this.layerView.renderAutoSuggestion(autoSuggestionData, inputValue);
      });
  };
}
