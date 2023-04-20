import { client } from '../../domain/client.js';
import { Component } from '../base/Component.js';
import CategoryContainer from './CategoryContainer.js';

export default class Main extends Component {
  constructor() {
    super('sidebar-main translateX-left');
    this.client = client;
    this.login = new Login();
    this.categoryContainer = new CategoryContainer();
    this.init();
  }

  initEventHandlers() {
    this.node.addEventListener('click', ({ target }) => this.handleClick(target));
  }

  handleClick(target) {
    const categoryMenu = target.closest('.category-menu');
    const backList = target.closest('.back');

    if (categoryMenu) {
      this.openSubCategory(categoryMenu);
    }

    if (backList) {
      this.closeSubCategory();
    }
  }

  closeSubCategory() {
    this.categoryContainer.translateRight();
  }

  openSubCategory(categoryMenu) {
    const categoryId = categoryMenu.dataset.menuId;
    this.categoryContainer.renderSubCategory(categoryId);
    this.categoryContainer.translateLeft();
  }

  appear() {
    this.node.classList.remove('translateX-left');
    this.node.classList.add('translateX-right');
  }

  disappear() {
    this.node.classList.remove('translateX-right');
    this.node.classList.add('translateX-left');
  }

  getTemplate() {
    return [this.login.node, this.categoryContainer.node];
  }
}

class Login extends Component {
  constructor() {
    super('sidebar-login', 'A');
    this.node.setAttribute('href', '#');
    this.init();
  }

  getTemplate() {
    return `
<img src="/src/assets/symbols/user.svg" />
<span>안녕하세요, 로그인</span>
    `;
  }
}
