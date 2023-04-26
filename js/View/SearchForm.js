import { Component } from '../Core/Component.js';
import { SearchLayer } from './SearchLayer.js';

export class SearchForm extends Component {
  constructor($target, controller) {
    super($target, controller);
    this.inputBar = document.querySelector('.search-bar__input');
    this.controller.model.registerObserver(this);
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
            </form>
            <div class="search-bar__layer font-BodyMD text-black bg-white"></div>`;
  }

  mount() {
    const $searchLayer = this.$target.querySelector('.search-bar__layer');

    new SearchLayer($searchLayer, this.controller);
  }

  update(data) {
    this.inputBar.value = data.inputBarValue;
  }

  setEvent() {
    const $searchbarInput = document.querySelector('.search-bar__input');
    const $searchLayer = this.$target.querySelector('.search-bar__layer');
    const $backdrop = document.querySelector('.modal__backdrop');

    $searchbarInput.addEventListener('click', () => {
      $searchLayer.classList.add('show');
      $backdrop.classList.add('show');
      this.focusIndex = -1;
    });

    $searchbarInput.addEventListener('blur', () => {
      const focusEl = document.querySelector(`[data-index="${this.focusIndex}"]`);

      $searchLayer.classList.remove('show');
      $backdrop.classList.remove('show');
      if (focusEl) {
        focusEl.classList.remove('selected');
      }
    });

    $searchbarInput.addEventListener('keydown', this.controller);
  }
}
