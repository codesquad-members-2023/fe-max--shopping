import { Base } from "../../Base.js";

export class Cart extends Base {
  constructor() {
    super("div");
    this.setAttribute("id", "cart");

    const cartSymbol = new Base("img");
    cartSymbol.setAttribute("class", "cart__symbol");
    cartSymbol.setAttribute("src", "./src/assets/cart.svg");

    const cartText = new Base("span");
    cartText.setAttribute("class", "cart__text");
    cartText.setTextContent("장바구니");

    this.setChildren(cartSymbol, cartText);
  }
}
