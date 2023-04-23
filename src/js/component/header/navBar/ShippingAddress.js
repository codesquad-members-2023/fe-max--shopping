import { Base } from "../../Base.js";
import { ShippingTooltip } from "./shippingTooltip.js";

export class ShippingAddress extends Base {
  constructor(observer) {
    super("a");
    this.ShippingTooltip = new ShippingTooltip(observer);

    this.init();
  }

  init() {
    this.setAttribute("id", "shippingAddress");
    this.addChild();

    this.setEvent(
      "mouseover",
      this.ShippingTooltip.show.bind(this.ShippingTooltip)
    );
    this.setEvent(
      "mouseout",
      this.ShippingTooltip.hide.bind(this.ShippingTooltip)
    );
  }

  addChild() {
    const template = `
      <div class="address__label"><img src="./src/assets/location.svg">
        <span class="address__labelText">배송처</span>
      </div>
      <span class="adddress__text">대한민국</span>
    `;

    this.setTemplate(template);
    this.setChildren(this.ShippingTooltip);
  }
}
