export class SearchBar {
  constructor($target) {
    this.$target = $target;
    this.render();
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

  updateInputBar(model) {
    this.inputBar.value = model.inputBarValue;
  }
}
