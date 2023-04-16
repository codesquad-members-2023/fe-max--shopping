import { Component } from '../base/Component.js';

export class NavbarSub extends Component {
  constructor() {
    super('navbar-sub');
    this.init();
  }

  getTemplate() {
    return `
<div class="left">
  <a class="menu" href=""><img src="/src/assets/symbols/menu.svg" alt="" /> 모두</a>
  <a class="menu" href="">오늘의 딜</a>
  <a class="menu" href="">고객 서비스</a>
  <a class="menu" href="">레지스트리</a>
  <a class="menu" href="">기프트 카드</a>
  <a class="menu" href="">판매</a>
</div>
<div class="right">
  <a class="menu" href="">지금 특가 상품 쇼핑하기</a>
</div>
    `;
  }
}
