import { client } from '../../domain/client.js';
import { Component } from '../base/Component.js';
import Category from './Category.js';

export default class Menu extends Component {
  constructor() {
    super('menu');
    this.client = client;
    this.login = new Login();
    this.firstCategory = new Category();
    this.secondCategory = new Category();
    this.initCategory();
    this.init();
  }

  initCategory() {
    this.client.fetchCategories().then((categoryInfos) => {
      this.firstCategory.render(categoryInfos[0]);
      this.secondCategory.render(categoryInfos[1]);
    });
  }

  appear() {
    this.node.classList.add('active');
  }

  disappear() {
    this.node.classList.remove('active');
  }

  getTemplate() {
    return [this.login.node, this.firstCategory.node, this.secondCategory.node];
  }
}

class Login extends Component {
  constructor() {
    super('login', 'A');
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
