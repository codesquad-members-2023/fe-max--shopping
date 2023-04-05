import { Login } from './Login.js';
import { Component } from '/src/js/components/base/Component.js';

export class NavbarMain extends Component {
  constructor() {
    super('main');
  }

  template() {
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

  template() {
    return `
  <a href="/">
    <img class="amazon-icon" src="/src/assets/images/BI.svg" alt="amazon logo icon" />
  </a>
    `;
  }
}

class Shipping extends Component {
  constructor() {
    super('shipping');
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
  constructor() {
    super('search-bar', 'FORM');
  }

  template() {
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

  template() {
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

  template() {
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

  template() {
    return `
<img src="/src/assets/symbols/cart.svg" alt="cart icon" />
<span class="main-text">장바구니</span>
    `;
  }
}
