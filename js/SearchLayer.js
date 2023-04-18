export class SearchLayer {
  constructor($target) {
    this.$target = $target;
    this.url = '../data/db.json';
    this.searchDB = {};
    this.setup();
  }

  async setup() {
    this.searchDB = await this.getData();
    this.render();
    this.setEvent();
  }

  async getData() {
    const response = await fetch(this.url);
    const data = await response.json();
    return data;
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
