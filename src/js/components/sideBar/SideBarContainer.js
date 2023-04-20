import { $ } from '/src/js/utils/domUtils.js';
import { BaseElement } from '/src/js/utils/BaseElement.js';
import { SideBar } from './SideBar.js';

export class SideBarContainer {
  constructor(aside) {
    this.aside = aside;
    this.sidebar = new SideBar('sidebar', 'section');
    this.backdrop = new BaseElement('sidebar__backdrop', 'div');
    this.openButton = $('.sidebar__button--open');

    this.render();
    this.setEventHandler();
  }

  render() {
    this.backdrop.setTemplate(`
    <button class="sidebar__button--close">
      <img src="src/asset/img/close.svg" alt="사이드바 닫기" />
    </button>`);
    this.aside.append(this.sidebar.getElement(), this.backdrop.getElement());
  }

  setEventHandler() {
    this.openButton.addEventListener('click', () => {
      this.openSidebar();
    });
    this.backdrop.setEventHandler('click', () => {
      this.closeSidebar();
    });
  }

  openSidebar() {
    this.aside.classList.remove('closed');
  }

  closeSidebar() {
    if (this.aside.classList.contains('closed')) {
      return;
    }
    this.aside.classList.add('closed');
  }
}
