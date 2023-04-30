export class SearchBar {
  constructor($target) {
    this.$target = $target;
    this.onEventCallback = null;

    this.render();
    this.addEvent();
    this.inputBar = document.querySelector('.search-bar__input');
  }

  render() {
    this.$target.innerHTML = this.template();
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

  onEvent(callback) {
    this.onEventCallback = callback;
  }

  addEvent() {
    const $searchForm = document.querySelector('.search-bar__form');
    const $searchBarInput = document.querySelector('.search-bar__input');

    $searchBarInput.addEventListener('blur', (e) => {
      this.onEventCallback(e);
    });
    $searchForm.addEventListener('click', (e) => {
      this.onEventCallback(e);
    });
    $searchForm.addEventListener('keydown', (e) => {
      this.onEventCallback(e);
    });
    $searchForm.addEventListener('submit', (e) => {
      this.onEventCallback(e);
    });
    $searchForm.addEventListener('input', (e) => {
      this.onEventCallback(e);
    });
  }

  updateInputBar(model) {
    this.inputBar.value = model.inputBarValue;
  }
}
