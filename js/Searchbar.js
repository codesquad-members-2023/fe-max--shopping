import { SearchbarLayer } from './SearchbarLayer.js';

export class Searchbar {
  constructor($target) {
    this.$target = $target;
    this.render();
    this.layer = new SearchbarLayer(this.$target);
    this.focusIndex = 0;
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
              <button class="search-bar__btn bg-orange1">
                <img src="./assets/icons/search.svg" alt="search icon" />
              </button>
            </form>`;
  }

  render() {
    this.$target.insertAdjacentHTML('beforeend', this.template());
  }

  setEvent() {
    const searchbarInput = this.$target.querySelector('.search-bar__input');
    const backdrop = document.querySelector('.modal__backdrop');

    searchbarInput.addEventListener('click', () => {
      const searchbarLayer = document.querySelector('.search-bar__layer');
      searchbarLayer.classList.add('show');
      backdrop.classList.add('show');
      this.focusIndex = 0;
    });

    searchbarInput.addEventListener('blur', () => {
      const searchbarLayer = document.querySelector('.search-bar__layer');
      const focusEl = this.$target.querySelector(`[data-index="${this.focusIndex - 1}"]`);

      searchbarLayer.classList.remove('show');
      backdrop.classList.remove('show');
      focusEl.classList.remove('selected');
    });

    searchbarInput.addEventListener('keydown', (e) => {
      const lists = this.$target.querySelectorAll('.search-bar__result');

      if (e.key === 'ArrowDown' && this.focusIndex === 0) {
        const firstEl = lists[0];
        const lastEl = lists[lists.length - 1];

        firstEl.classList.add('selected');
        lastEl.classList.remove('selected');

        this.focusIndex += 1;
        return;
      }

      if (e.key === 'ArrowDown' && this.focusIndex > 0) {
        const prevFocusEl = lists[this.focusIndex - 1];
        const currentFocusEl = lists[this.focusIndex];

        prevFocusEl.classList.remove('selected');
        currentFocusEl.classList.add('selected');

        this.focusIndex = this.focusIndex + 1 <= lists.length - 1 ? this.focusIndex + 1 : 0;
      }
    });
  }
}
