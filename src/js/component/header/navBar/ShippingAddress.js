import { Base } from "../../Base.js";
import { ShippingTooltip } from "./shippingTooltip.js";

export class ShippingAddress extends Base {
  constructor(backdrop) {
    super("a");
    this.ShippingTooltip = new ShippingTooltip(backdrop);

    this.init();
  }

  init() {
    this.setAttribute("id", "shippingAddress");
    this.addChild();

    this.setEvent(
      "mouseover",
      this.ShippingTooltip.showTooltipHandler.bind(this.ShippingTooltip)
    );
    this.setEvent(
      "mouseout",
      this.ShippingTooltip.hideTooltipHandler.bind(this.ShippingTooltip)
    );
  }

  addChild() {
    this.createChild(
      "img",
      [{ name: "src", value: "./src/assets/location.svg" }],
      null,
      "symbols"
    );

    this.createChild(
      "span",
      [{ name: "class", value: "address__labelText" }],
      "배송처",
      "addressLabelText"
    );

    this.createChild(
      "div",
      [{ name: "class", value: "address__label" }],
      null,
      "addressLabel",
      ["symbols", "addressLabelText"]
    );

    this.createChild(
      "span",
      [{ name: "class", value: "adddress__text" }],
      "대한민국",
      "adddressText"
    );
    this.setChildren(this.ShippingTooltip);
  }
}
