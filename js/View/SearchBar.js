import { Component } from '../Core/Component.js';

export class SearchBar extends Component {
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
                id="searchBarInput"
                placeholder="검색 Amazon"
                autocomplete="off"
              />
              <button class="search-bar__btn bg-orange1" type="submit">
                <img src="./assets/icons/search.svg" alt="search icon" />
              </button>
            </form>
            <div class="search-bar__layer font-BodyMD text-black bg-white" id="searchLayer"></div>`;
  }

  updateInputBar(data) {
    this.inputBar.value = data.inputBarValue;
  }

  setEvent() {
    const $searchbarInput = this.$target.querySelector('.search-bar__input');
    const $searchLayer = document.querySelector('.search-bar__layer');
    const $backdrop = document.querySelector('.modal__backdrop');

    this.passDomElements($searchbarInput, $searchLayer, $backdrop);

    $searchbarInput.addEventListener('click', this.controller);
    $searchbarInput.addEventListener('blur', this.controller);
    $searchbarInput.addEventListener('keydown', this.controller);
  }

  passDomElements(...args) {
    args.map((el) => {
      this.controller.domElements[el.id] = el;
    });
  }
}
