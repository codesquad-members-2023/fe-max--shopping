import { Component } from '/src/js/components/base/Component.js';

export class LoginModal extends Component {
  constructor() {
    super('modal login-modal', 'DIALOG');
  }

  template() {
    return `
<button class="login-btn">로그인</button>
<div>
  <span>기존 사용자가 아니십니까?</span>
  <span><a href="/">여기에서 시작합니다.</a></span>
</div>
    `;
  }
}

export class ShippingModal extends Component {
  constructor() {
    super('modal shipping-modal', 'DIALOG');
  }

  template() {
    return `
<p>
  KR으로 배송할 품목을 표시하겠습니다. 다른 국가로 배송되는 품목을 보려면 배송 주소를
  변경하십시오.
</p>
<div>
  <button class="continue-btn">계속</button>
  <button class="address-btn">주소 변경</button>
</div>
    `;
  }
}
