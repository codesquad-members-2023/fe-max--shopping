import { Base } from "../../Base.js";

export class Menu extends Base {
  constructor(menuData) {
    super("div");
    this.setAttribute("class", "menu");
    if (menuData.symbol) {
      const menuSymbol = new Base("img");
      menuSymbol.setAttribute("class", "menu__symbol");
      menuSymbol.setAttribute("src", menuData.symbol);
      this.setChildren(menuSymbol);
    }

    const menuText = new Base("div");
    menuText.setAttribute("class", "menu__text");
    menuText.setTextContent(menuData.text);
    this.setChildren(menuText);
  }
}
