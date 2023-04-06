import { Base } from "../../Base.js";
import { BI } from "./BI.js";
import { Cart } from "./Cart.js";
import { Login } from "./Login.js";
import { Mypage } from "./Mypage.js";
import { Nation } from "./Nation.js";
import { SearchBar } from "./SearchBar.js";
import { ShippingAddress } from "./ShippingAddress.js";

export class NavBar extends Base {
  constructor() {
    super("div");
    this.backdrop = this.createBackdrop();
    this.logoNode = new BI();
    this.shippingAddress = new ShippingAddress(this.backdrop);
    this.searchBar = new SearchBar();
    this.nation = new Nation();
    this.login = new Login(this.backdrop);
    this.mypage = new Mypage();
    this.cart = new Cart();
    this.init();
  }

  init() {
    this.setAttribute("id", "navBar");
    this.setChildren(
      this.logoNode,
      this.shippingAddress,
      this.searchBar,
      this.nation,
      this.login,
      this.mypage,
      this.cart
    );
  }

  createBackdrop() {
    this.createChild(
      "div",
      [{ name: "id", value: "backdrop" }],
      null,
      "backdrop"
    );
    return this["backdrop"];
  }
}
