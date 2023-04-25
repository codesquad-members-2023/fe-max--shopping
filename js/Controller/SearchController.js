export class SearchController {
  constructor(store) {
    this.store = store;
    this.API_KEY = 'http://localhost:5050';
  }

  fetchData(path) {
    return fetch(`${this.API_KEY}/${path}`) //
      .then((response) => response.json())
      .then((data) => this.store.saveServerData(data));
  }

  keyboardHandler(e) {
    const $searchbarInput = this;
    const lists = document.querySelectorAll('.search-bar__result');

    if (e.key === 'ArrowDown') {
      this.focusIndex = this.focusIndex + 1 <= lists.length - 1 ? this.focusIndex + 1 : 0;
      const prevIndex = this.focusIndex - 1 < 0 ? lists.length - 1 : this.focusIndex - 1;

      const prevFocusEl = lists[prevIndex];
      const currentFocusEl = lists[this.focusIndex];

      prevFocusEl.classList.remove('selected');
      currentFocusEl.classList.add('selected');
      $searchbarInput.value = currentFocusEl.innerText;
    }

    if (e.key === 'ArrowUp') {
      if (this.focusIndex === -1) {
        this.focusIndex = lists.length - 1;

        const currentFocusEl = lists[this.focusIndex];
        currentFocusEl.classList.add('selected');
        $searchbarInput.value = currentFocusEl.innerText;
        return;
      }

      this.focusIndex = this.focusIndex - 1 >= 0 ? this.focusIndex - 1 : lists.length - 1;
      const prevIndex = this.focusIndex + 1 > lists.length - 1 ? 0 : this.focusIndex + 1;

      const prevFocusEl = lists[prevIndex];
      const currentFocusEl = lists[this.focusIndex];

      prevFocusEl.classList.remove('selected');
      currentFocusEl.classList.add('selected');
      $searchbarInput.value = currentFocusEl.innerText;
    }
  }
}
