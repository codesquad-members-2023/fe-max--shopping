import { BaseElement } from '../../utils/BaseElement.js';
import { fetchData } from '../../utils/dataUtils.js';

export class SideBar extends BaseElement {
  constructor(className, tag) {
    super(className, tag);
    this.state = {
      menu: [],
    };
    this.render();
    this.initEventHandler();
    this.loadMenu();
  }

  async loadMenu() {
    const menu = await fetchData('sidebarMenu');
    this.setState({ menu });
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
        const titleTemplate = `<h2 class="menu__title">
                              <p>${category.title}</p>
                            </h2>`;
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
    const templates = menu.map((item, index) => {
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
      `<li class="compressed">
        <a class="menu__toggle--expand">
          <span>모두 보기</span>
          <div class="menu__icon--expand"></div>
        </a>
        <div class="menu__divider"></div>
        <ul class="menu__nested-list">
         ${templates.slice(4).join('')}
        </ul>
        <a class="menu__toggle--contract">
          <span>간단히 보기</span>
          <div class="menu__icon--contract"></div>
        </a>
      </li>`
    );
  }

  initEventHandler() {
    this.element.addEventListener('click', (e) => this.toggleCompressedMenu(e))
  }

  toggleCompressedMenu(event) {
    const target = event.target;
    const isToggleButton = target.classList.contains('.menu__toggle--expand') || target.classList.contains('.menu__toggle--contract');
    
    if (!isToggleButton) {
      return;
    }
    target.closest('.compressed').classList.remove('.compressed');
  }
}
