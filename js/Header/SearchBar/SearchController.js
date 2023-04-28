export class SearchController {
  constructor(model, fetcher) {
    this.model = model;
    this.fetcher = fetcher;
    this.HOST_KEY = 'localhost:5050';
    this.domElements = {};
  }

  loadInitialData() {
    return this.fetcher //
      .get(this.HOST_KEY, 'searchDB')
      .then((data) => this.model.saveInitialData(data));
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

      default:
        console.log(e.target);
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
}
