import { BaseElement } from '../../utils/BaseElement.js';
import { API_URL } from '../../utils/constants.js';

export class SideBar extends BaseElement {
  constructor(className, tag) {
    super(className, tag);
    this.state = {
      menu: [],
    };
    this.render();
    this.loadMenu();
  }

  loadMenu() {
    const url = new URL('sidebarMenu', API_URL);
    fetch(url)
      .then((res) => res.json())
      .then((menu) => this.setState({ menu }));
  }

  createMenuTitle(title) {
    return {
      item: title,
      isTitle: true,
    };
  }

  createMenuItem(item) {
    return {
      item,
      isTitle: false,
    };
  }

  setState(newState) {
    this.state = { ...newState };
    this.render();
  }

  render() {
    const { menu } = this.state;

    const headerTemplate = `<header class="sidebar__user-profile">
      <img src="src/asset/img/user-reverse.svg" alt="사용자 프로필" />
      <p>안녕하세요, 로그인</p>
    </header>`;

    const menuTemplate = menu
      .map((category) => {
        const titleTemplate = `<div class="menu__title">
                              <p>${category.title}</p>
                            </div>`;
        const itemsTemplate = this.createItemsTemplate(category.subMenu);
        return titleTemplate + itemsTemplate;
      })
      .join(`<li class="menu__divider"></li>`);

    const contentTemplate = `<section class="sidebar__content">
                              <ul class="sidebar__menu">
                                ${menuTemplate}
                              </ul>
                            </section>`;

    this.element.innerHTML = headerTemplate + contentTemplate;
  }

  createItemsTemplate(menu) {
    const templates = menu.map((item) => {
      return `<li>
              <a class="menu__item">
                <span>${item.text}</span>
                <div class="menu__icon--detail"></div>
              </a>
            </li>`;
    });

    if (templates.length < 5) {
      return templates;
    }
    return (
      templates.slice(0, 4) +
      `<li>
        <a class="menu__toggle">
          <span>모두 보기</span>
          <div class="menu__icon--expand"></div>
        </a>
      </li>
      <li class="menu__divider"></li>
      ` +
      templates.slice(4) +
      `<li>
        <a class="menu__toggle">
          <span>간단히 보기</span>
          <div class="menu__icon--contract"></div>
        </a>
      </li>
      <li class="menu__divider"></li>
      `
    );
  }
}
