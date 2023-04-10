import { Login } from './Login.js';
import Search from './Search/Search.js';
import { Shipping } from './Shipping.js';
import { Component } from '/src/js/components/base/Component.js';

export class NavbarMain extends Component {
  constructor() {
    super('navbar-main');
  }

  getTemplate() {
    const logo = new Logo();
    const shipping = new Shipping();
    const search = new Search();
    const nation = new Nation();
    const login = new Login();
    const myPage = new MyPage();
    const cart = new Cart();

    return [logo.node, shipping.node, search.node, nation.node, login.node, myPage.node, cart.node];
  }
}

class Logo extends Component {
  constructor() {
    super('logo', 'H1');
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
  }

  getTemplate() {
    return `
<img src="/src/assets/symbols/cart.svg" alt="cart icon" />
<span class="main-text">장바구니</span>
    `;
  }
}
