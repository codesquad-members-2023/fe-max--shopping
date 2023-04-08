import { Base } from "../../Base.js";

export class Cart extends Base {
  constructor() {
    super("div");
    this.init();
  }

  init() {
    this.setAttribute("id", "cart");
    this.addChild();
  }

  addChild() {
    this.createChild(
      "img",
      [
        { name: "class", value: "cart__symbol" },
        { name: "src", value: "./src/assets/cart.svg" },
      ],
      null,
      "cartSymbol"
    );

    this.createChild(
      "span",
      [{ name: "class", value: "cart__text" }],
      "장바구니",
      "cartText"
    );
  }
}
