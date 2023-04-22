import { Component } from '../../core/Component.js';
import { $, addHiddenClass, removeHiddenClass } from '../../utils.js';

export class Sidebar extends Component {
  getTemplate() {
    const template = [];
    for (const menu of this.state) {
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

  setEvent() {
    $('.close-btn').addEventListener('click', () => {
      addHiddenClass('.side-background');
    });

    $('.showAllBtn').addEventListener('click', () => {
      const hiddenCategory = document.querySelector('.side-bar__contents').lastChild;
      $('.showAllBtn').classList.add('none');
      hiddenCategory.classList.remove('hidden');
    });

    $('.showShortlyBtn').addEventListener('click', () => {
      const hiddenCategory = document.querySelector('.side-bar__contents').lastChild;
      $('.showAllBtn').classList.remove('none');
      hiddenCategory.classList.add('hidden');
    });
  }
}
