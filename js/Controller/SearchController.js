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
      this.model.notifyAll();
    }

    if (e.key === 'ArrowUp') {
      if (this.model.focusIndex === -1) {
        this.model.focusIndex = lists.length - 1;

        const currentFocusEl = lists[this.model.focusIndex];
        currentFocusEl.classList.add('selected');

        this.model.inputBarValue = currentFocusEl.innerText;
        this.model.notifyAll();
        return;
      }

      this.model.focusIndex = this.model.focusIndex - 1 >= 0 ? this.model.focusIndex - 1 : lists.length - 1;
      const prevIndex = this.model.focusIndex + 1 > lists.length - 1 ? 0 : this.model.focusIndex + 1;

      const prevFocusEl = lists[prevIndex];
      const currentFocusEl = lists[this.model.focusIndex];

      prevFocusEl.classList.remove('selected');
      currentFocusEl.classList.add('selected');

      this.model.inputBarValue = currentFocusEl.innerText;
      this.model.notifyAll();
    }
  }

  submitHandler = (e) => {
    e.preventDefault();

    const recentSearchWord = e.target.searchbar.value;
    const newData = {
      id: 0,
      content: recentSearchWord,
    };

    const currentHistory = this.model.searchData.searchHistory;
    currentHistory.push(newData);
    const reqBody = { id: 'searchHistory', content: currentHistory };
    this.fetcher.put(this.HOST_KEY, 'searchDB/searchHistory', reqBody);
  };
}
