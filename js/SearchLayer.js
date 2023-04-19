export class SearchLayer {
  constructor($target) {
    this.$target = $target;
    this.url = '../data/db.json';
    this.searchDB = {};
    this.setup();
  }

  setup() {
    this.getData()
      .then((data) => {
        this.searchDB = data;
        this.render();
        this.setEvent();
      })
      .catch((error) => console.error(error));
  }

  getData() {
    return fetch(this.url)
      .then((response) => response.json())
      .catch((error) => console.error(error));
  }

  template() {
    const { suggestions } = this.searchDB;
    return `<div class="search-bar__layer font-BodyMD text-black bg-white">
              <ul class="search-bar__result-container">
                 ${suggestions
                   .map(
                     (el, index) =>
                       `<li class="search-bar__result" data-index="${index}">
                         <img src="./assets/icons/arrow-top-right.svg" alt="" />
                         <a href="">${el}</a>
                       </li>`,
                   )
                   .join('')}
              </ul>
            </div>`;
  }

  render() {
    this.$target.insertAdjacentHTML('beforeend', this.template());
  }
}
