import { Component } from '../base/Component.js';

export class NavbarMain extends Component {
  constructor() {
    super('main');
  }

  template() {
    const logoNode = new Logo('logo', 'H1').node;
    const shippingNode = new Shipping('shipping').node;
    const searchBarNode = new SearchBar('search-bar', 'FORM').node;
    const nationNode = new Nation('nation').node;
    const loginNode = new Login('login').node;
    const myPageNode = new MyPage('my-page').node;
    const cartNode = new Cart('cart').node;

    return [logoNode, shippingNode, searchBarNode, nationNode, loginNode, myPageNode, cartNode];
  }
}

class Logo extends Component {
  constructor(className, tagName) {
    super(className, tagName);
  }

  template() {
    return `
  <a href="/">
    <img class="amazon-icon" src="/src/assets/images/BI.svg" alt="amazon logo icon" />
  </a>
    `;
  }
}

class Shipping extends Component {
  constructor(className, tagName) {
    super(className, tagName);
  }

  template() {
    return `
<div class="top">
  <img src="/src/assets/symbols/location.svg" alt="location icon" />
  <span class="label-text">배송처</span>
</div>
<span class="main-text">대한민국</span>
    `;
  }
}

class SearchBar extends Component {
  constructor(className, tagName) {
    super(className, tagName);
  }

  template() {
    return `
<input type="search" class="input" placeholder="검색 Amazon" />
<button type="submit" class="submit-btn"></button>
    `;
  }
}

class Nation extends Component {
  constructor(className, tagName) {
    super(className, tagName);
  }

  template() {
    return `
<img src="/src/assets/images/flag.svg" alt="flag icon" />
<span class="main-text">KO</span>
    `;
  }
}

class Login extends Component {
  constructor(className, tagName) {
    super(className, tagName);
  }

  template() {
    return `
<span class="label-text">안녕하세요, 로그인</span>
<span class="main-text">계정 및 목록</span>
    `;
  }
}

class MyPage extends Component {
  constructor(className, tagName) {
    super(className, tagName);
  }

  template() {
    return `
<span class="label-text">반품</span>
<span class="main-text">& 주문</span>
    `;
  }
}

class Cart extends Component {
  constructor(className, tagName) {
    super(className, tagName);
  }

  template() {
    return `
<img src="/src/assets/symbols/cart.svg" alt="cart icon" />
<span class="main-text">장바구니</span>
    `;
  }
}
