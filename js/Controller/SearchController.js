export class SearchController {
  constructor(model) {
    this.model = model;
    this.API_KEY = 'http://localhost:5050';
  }

  fetchData(path) {
    return fetch(`${this.API_KEY}/${path}`) //
      .then((response) => response.json())
      .then((data) => this.model.saveServerData(data));
  }

  putData(path, updatedData) {
    return fetch(`${this.API_KEY}/${path}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: 'searchHistory',
        body: updatedData,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }

  handleEvent(e) {
    e.stopPropagation();

    switch (e.type) {
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

  keydownHandler(e) {
    const lists = document.querySelectorAll('.search-bar__result');

    if (e.key === 'ArrowDown') {
      this.focusIndex = this.focusIndex + 1 <= lists.length - 1 ? this.focusIndex + 1 : 0;
      const prevIndex = this.focusIndex - 1 < 0 ? lists.length - 1 : this.focusIndex - 1;

      const prevFocusEl = lists[prevIndex];
      const currentFocusEl = lists[this.focusIndex];

      prevFocusEl.classList.remove('selected');
      currentFocusEl.classList.add('selected');

      this.model.inputBarValue = currentFocusEl.innerText;
      this.model.notifyAll();
    }

    if (e.key === 'ArrowUp') {
      if (this.focusIndex === -1) {
        this.focusIndex = lists.length - 1;

        const currentFocusEl = lists[this.focusIndex];
        currentFocusEl.classList.add('selected');

        this.model.inputBarValue = currentFocusEl.innerText;
        this.model.notifyAll();
        return;
      }

      this.focusIndex = this.focusIndex - 1 >= 0 ? this.focusIndex - 1 : lists.length - 1;
      const prevIndex = this.focusIndex + 1 > lists.length - 1 ? 0 : this.focusIndex + 1;

      const prevFocusEl = lists[prevIndex];
      const currentFocusEl = lists[this.focusIndex];

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

    const currentHistory = this.store.searchData.searchHistory;
    currentHistory.push(newData);

    this.putData('searchDB/searchHistory', currentHistory);
  };
}
