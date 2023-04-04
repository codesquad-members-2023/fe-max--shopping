import { Component } from '../base/Component.js';

export class NavbarSub extends Component {
  constructor() {
    super('sub');
  }

  template() {
    return `
<div class="left">
  <a href=""><img src="./src/assets/symbols/menu.svg" alt="" /> 모두</a>
  <a href="">오늘의 딜</a>
  <a href="">고객 서비스</a>
  <a href="">레지스트리</a>
  <a href="">기프트 카드</a>
  <a href="">판매</a>
</div>
<div class="right">
  <a href="">지금 특가 상품 쇼핑하기</a>
</div>
    `;
  }
}
