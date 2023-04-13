import { SearchbarLayer } from './SearchbarLayer.js';

export class Searchbar {
  constructor($target) {
    this.$target = $target;
    this.render();
    this.layer = new SearchbarLayer(this.$target);
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
    });

    searchbarInput.addEventListener('blur', () => {
      const searchbarLayer = document.querySelector('.search-bar__layer');
      searchbarLayer.classList.remove('show');
      backdrop.classList.remove('show');
    });

    this.$target.addEventListener('keydown', (e) => {
      // console.log(e.key);
      if (e.key === 'ArrowDown') {
        console.log(this.layer);
      }
    });
  }
}
