import { SearchLayer } from './SearchLayer.js';

export class Searchbar {
  constructor($target) {
    this.$target = $target;
    this.render();
    this.layer = new SearchLayer(this.$target.lastElementChild);
    this.focusIndex = -1;
    this.setEvent();
  }

  template() {
    return `<form class="search-bar__form" action="">
              <input
                type="text"
                name="searchbar"
                class="search-bar__input"
                id="search-bar-input"
                placeholder="검색 Amazon"
                autocomplete="off"
              />
              <button class="search-bar__btn bg-orange1" type="submit">
                <img src="./assets/icons/search.svg" alt="search icon" />
              </button>
            </form>`;
  }

  render() {
    this.$target.insertAdjacentHTML('afterbegin', this.template());
  }

  setEvent() {
    const $searchbarInput = this.$target.querySelector('.search-bar__input');
    const $backdrop = document.querySelector('.modal__backdrop');

    $searchbarInput.addEventListener('click', () => {
      this.layer.node.classList.add('show');
      $backdrop.classList.add('show');
      this.focusIndex = -1;
    });

    $searchbarInput.addEventListener('blur', () => {
      const focusEl = this.$target.querySelector(`[data-index="${this.focusIndex}"]`);

      this.layer.node.classList.remove('show');
      $backdrop.classList.remove('show');
      focusEl.classList.remove('selected');
    });

    $searchbarInput.addEventListener('keydown', (e) => {
      const lists = this.$target.querySelectorAll('.search-bar__result');

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
    });
  }
}
