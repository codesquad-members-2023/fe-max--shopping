export class SearchLayer {
  constructor($target) {
    this.$target = $target;
    this.node = this.$target;
    this.url = 'http://localhost:5050';
    this.searchDB = {};
    this.setup();
  }

  setup() {
    this.getData('suggestions').then((data) => {
      this.searchDB.suggestions = data;
      this.loadSearchHistory();
      this.render();
      this.setEvent();
    });
  }

  getData(path) {
    return fetch(`${this.url}/${path}`).then((response) => response.json());
  }

  loadSearchHistory() {
    if (localStorage.getItem('searchHistory') === null) {
      localStorage.setItem('searchHistory', JSON.stringify([]));
    }
    this.searchDB.history = JSON.parse(localStorage.getItem('searchHistory'));
  }

  // loadAutoData() {
  //   const url = `${this.url}/auto`;
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((response) => this.fillLayer(response));
  // }

  // fillLayer(autoArray) {
  //   const resultList = document.querySelector('.search-bar__result-container');
  //   const autoTemplate = `${autoArray
  //     .map(
  //       (el, index) =>
  //         `<li class="search-bar__result" data-index="${index}">
  //            <a href="">${el}</a>
  //          </li>`,
  //     )
  //     .join('')}`;
  //   resultList.innerHTML = autoTemplate;
  // }

  template() {
    const { suggestions, history } = this.searchDB;

    return `<ul class="search-bar__result-container">
              ${history
                .map(
                  (el, index) =>
                    `<li class="search-bar__result history" data-index="${index}">
                      <a href="">${el}</a>
                      <button>
                        <img src="./assets/icons/close.svg" alt="" />
                      </button>  
                    </li>`,
                )
                .join('')} 
              ${suggestions
                .map(
                  (el, index) =>
                    `<li class="search-bar__result suggestion" data-index="${index}">
                      <img src="./assets/icons/arrow-top-right.svg" alt="" />
                      <a href="">${el}</a>
                    </li>`,
                )
                .join('')}
            </ul>`;
  }

  render() {
    this.$target.innerHTML = '';
    this.$target.insertAdjacentHTML('beforeend', this.template());
  }

  setEvent() {
    const $searchForm = document.querySelector('.search-bar__form');
    const $searchbarInput = document.querySelector('.search-bar__input');

    $searchForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const { history } = this.searchDB;
      const recentSearchWord = $searchbarInput.value;
      history.unshift(recentSearchWord);
      this.searchDB.history = history.slice(0, 5);

      localStorage.setItem('searchHistory', JSON.stringify(this.searchDB.history));

      this.render();
    });
  }
}
