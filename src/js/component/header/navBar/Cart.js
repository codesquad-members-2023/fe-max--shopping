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
    const template = `
      <img class="cart__symbol" src="./src/assets/cart.svg">
      <span class="cart__text">장바구니</span>
    `;

    this.setTemplate(template);
  }
}
