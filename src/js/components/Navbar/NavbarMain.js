import { Component } from '../base/Component.js';

export class NavbarMain extends Component {
  constructor() {
    super('main');
    this.leftNode = new NavbarMainLeft().node;
    this.centerNode = new NavbarMainCenter().node;
    this.rightNode = new NavbarMainRight().node;
    this.node.append(this.leftNode, this.centerNode, this.rightNode);
  }
}

class NavbarMainLeft extends Component {
  constructor() {
    super('left');
  }

  template() {
    return `
<h1 class="logo">
  <a href="/">
    <img class="amazon-icon" src="./src/assets/images/BI.svg" alt="amazon logo icon" />
  </a>
</h1>
<div class="shipping">
  <div class="top">
    <img src="./src/assets/symbols/location.svg" alt="location icon" />
    <span class="label-text">배송처</span>
  </div>
  <span class="main-text">대한민국</span>
</div>
    `;
  }
}

class NavbarMainCenter extends Component {
  constructor() {
    super('center');
  }

  template() {
    return `
<form class="search-bar">
  <input type="search" class="input" placeholder="검색 Amazon" />
  <button type="submit" class="submit-btn"></button>
</form>
    `;
  }
}

class NavbarMainRight extends Component {
  constructor() {
    super('right');
  }

  template() {
    return `
<div class="nation">
  <img src="./src/assets/images/flag.svg" alt="flag icon" />
  <span class="main-text">KO</span>
</div>

<div class="login">
  <span class="label-text">안녕하세요, 로그인</span>
  <span class="main-text">계정 및 목록</span>
</div>

<div class="my-page">
  <span class="label-text">반품</span>
  <span class="main-text">& 주문</span>
</div>

<div class="cart">
  <img src="./src/assets/symbols/cart.svg" alt="cart icon" />
  <span class="main-text">장바구니</span>
</div>
    `;
  }
}
