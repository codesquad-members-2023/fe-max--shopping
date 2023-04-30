import { $ } from '../../utils.js';

export class SidebarView {
  constructor() {
    this.sidebarContents = document.querySelector('.side-bar__contents');
  }

  getTemplate(state) {
    const template = [];
    for (const menu of state) {
      const categoryContents = [
        `<ul class="contents-category ${menu.isActive ? '' : 'hidden'}">
        ${this.getTitleTemplate(menu.title)}
        ${this.getListTemplate(menu.contents)}
        ${this.getViewTemplate(menu.btn.contents, menu.btn.className, menu.btn.img)}
        </ul>`,
      ];
      template.push(categoryContents);
    }
    return template.join('');
  }

  getTitleTemplate(title) {
    if (!title) return '';

    return `
        <li class="contents-category__title">
            <span>${title}</span>
        </li>`;
  }

  getListTemplate(list) {
    return `
      ${list
        .map(
          item => `<li>
                    <a class="contents-category__list" href="#">
                      <span>${item}</span>
                      <img src="./src/asset/icons/chevron-right.svg" alt="" />
                    </a>
                  </li>`
        )
        .join('')}
        `;
  }

  getViewTemplate(list, className, img) {
    if (!list) return '';

    return `
        <li>
            <a class="contents-category__view ${className}" href="#">
                <span>${list}</span>
                <img src="${img}" alt="" />
            </a>
        </li>`;
  }

  render(state) {
    const template = this.getTemplate(state);
    this.sidebarContents.innerHTML = template;
  }

  setEvent(handler) {
    $('.close-btn').addEventListener('click', () => {
      handler('closeSidebar');
    });
    $('.showAllBtn').addEventListener('click', () => {
      handler('showAllCategories');
    });
    $('.showShortlyBtn').addEventListener('click', () => {
      handler('showShortCategories');
    });
  }
}
