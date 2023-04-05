import { Base } from "../../Base.js";

export class ShippingAddress extends Base {
  constructor() {
    super("a");
    this.init();
  }

  init() {
    this.setAttribute("id", "shippingAddress");
    this.addChild();
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
  }
}
