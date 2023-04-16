import { Login } from './Login.js';
import Search from './Search/Search.js';
import { Shipping } from './Shipping.js';
import { Component } from '/src/js/components/base/Component.js';

export class NavbarMain extends Component {
  constructor() {
    super('navbar-main');
    this.logo = new Logo();
    this.shipping = new Shipping();
    this.search = new Search();
    this.nation = new Nation();
    this.login = new Login();
    this.myPage = new MyPage();
    this.cart = new Cart();
    this.init();
  }

  getTemplate() {
    return [
      this.logo.node,
      this.shipping.node,
      this.search.node,
      this.nation.node,
      this.login.node,
      this.myPage.node,
      this.cart.node,
    ];
  }
}

class Logo extends Component {
  constructor() {
    super('logo', 'H1');
    this.init();
  }

  getTemplate() {
    return `
  <a href="/">
    <img class="amazon-icon" src="/src/assets/images/BI.svg" alt="amazon logo icon" />
  </a>
    `;
  }
}

class Nation extends Component {
  constructor() {
    super('nation');
    this.init();
  }

  getTemplate() {
    return `
<img src="/src/assets/images/flag.svg" alt="flag icon" />
<span class="main-text">KO</span>
    `;
  }
}

class MyPage extends Component {
  constructor() {
    super('my-page');
    this.init();
  }

  getTemplate() {
    return `
<span class="label-text">반품</span>
<span class="main-text">& 주문</span>
    `;
  }
}

class Cart extends Component {
  constructor() {
    super('cart');
    this.init();
  }

  getTemplate() {
    return `
<img src="/src/assets/symbols/cart.svg" alt="cart icon" />
<span class="main-text">장바구니</span>
    `;
  }
}
