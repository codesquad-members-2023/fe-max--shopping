export class Renderer {
  constructor(parent, items) {
    this.items = items;
    this.parent = parent;
  }

  renderMainList(location, items) {
    location.innerHTML = items
      .map(
        (item) => `
      <li class="items">
        <a href="#">${item}</a>
        <img src="./src/assets/images/icn_chevron_right.svg" alt="" />
      </li>
    `,
      )
      .join('');
  }

  renderSubList(location, items, title) {
    location.innerHTML = `
    <div class="title">${title}</div>
    <ul class="lists">
      ${items.map((item) => `<li class="items"><a href="#">${item}</a></li>`).join('')}
    </ul>
  `;
  }
}
