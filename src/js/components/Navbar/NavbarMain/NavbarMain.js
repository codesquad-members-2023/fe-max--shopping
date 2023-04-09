import { Login } from './Login.js';
import { Shipping } from './Shipping.js';
import { Component } from '/src/js/components/base/Component.js';

export class NavbarMain extends Component {
  constructor() {
    super('navbar-main');
  }

  getTemplate() {
    const logoNode = new Logo().node;
    const shippingNode = new Shipping().node;
    const searchBarNode = new SearchBar().node;
    const nationNode = new Nation().node;
    const loginNode = new Login().node;
    const myPageNode = new MyPage().node;
    const cartNode = new Cart().node;

    return [logoNode, shippingNode, searchBarNode, nationNode, loginNode, myPageNode, cartNode];
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

class SearchBar extends Component {
  constructor() {
    super('search-bar', 'FORM');
  }

  getTemplate() {
    return `
<input type="search" class="input" placeholder="검색 Amazon" />
<button type="submit" class="submit-btn"></button>
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
