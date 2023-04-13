import { Component } from './Component.js';

export class SearchbarLayer extends Component {
  setup() {
    this.state = { items: ['item1', 'item2'] };
  }

  template() {
    const { items } = this.state;
    return `<div class="search-bar__layer font-BodyMD text-black bg-white">
              <ul class="search-bar__result-container">
                ${items
                  .map(
                    (item) =>
                      `<li class="search-bar__suggestion">
                         <img src="./assets/icons/arrow-top-right.svg" alt="" />
                         <a href="">${item}</a>
                       </li>`,
                  )
                  .join('')}
              </ul>
            </div>`;
  }
}
