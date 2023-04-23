import { Backdrop } from "../../Backdrop.js";
import { Base } from "../../Base.js";

export class ShippingTooltip extends Base {
  constructor(observer) {
    super("div");
    this.observer = observer;
    this.init();
  }
  init() {
    this.setAttribute("id", "shippingAddress__tooltip");
    this.addchild();
    this.observer.register(this);
  }

  show() {
    Backdrop.show();
    this.setStyle("display", "flex");
    this.observer.notify(this);
  }

  hide() {
    Backdrop.hide();
    this.setStyle("display", "none");
  }

  addchild() {
    const template = `
      <div class="shipping__tooltip__rectangle"></div>
        <div class="shipping__tooltip__box">
          <span class="tooltip__text">KR으로 배송할 품목을 표시하겠습니다. 다른 국가로 배송되는 품목을 보려면 배송 주소를 변경하십시오</span><div class="tooltip__btnWrapper">
          <button class="tooltip__continueBtn">계속</button>
          <button class="tooltip__changeAddressBtn">주소 변경</button>
        </div>
      </div>
    `;

    this.setTemplate(template);
  }
}
