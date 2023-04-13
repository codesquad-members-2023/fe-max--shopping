import { Component } from './Component.js';

export class Searchbar extends Component {
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

  addEvent() {
    const searchbarInput = this.$target.querySelector('.search-bar__input');
    const backdrop = document.querySelector('.modal__backdrop');

    searchbarInput.addEventListener('click', () => {
      const searchbarLayer = this.$target.querySelector('.search-bar__layer');
      searchbarLayer.classList.add('show');
      backdrop.classList.add('show');
    });
    searchbarInput.addEventListener('blur', () => {
      const searchbarLayer = this.$target.querySelector('.search-bar__layer');
      searchbarLayer.classList.remove('show');
      backdrop.classList.remove('show');
    });
  }
}
