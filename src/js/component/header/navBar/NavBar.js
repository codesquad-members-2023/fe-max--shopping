import { Base } from "../../Base.js";
import { BI } from "./BI.js";
import { Cart } from "./Cart.js";
import { Login } from "./Login.js";
import { Mypage } from "./Mypage.js";
import { Nation } from "./Nation.js";
import { ShippingAddress } from "./ShippingAddress.js";
import { SearchBar } from "./searchBar/SearchBar.js";

export class NavBar extends Base {
  constructor(observer) {
    super("div");
    this.logoNode = new BI();
    this.shippingAddress = new ShippingAddress(observer);
    this.searchBar = new SearchBar(observer);
    this.nation = new Nation();
    this.login = new Login(observer);
    this.mypage = new Mypage();
    this.cart = new Cart();
    this.init();
  }

  init() {
    this.setAttribute("id", "navBar");
    this.setChildren(
      this.logoNode,
      this.shippingAddress,
      this.searchBar.view,
      this.nation,
      this.login,
      this.mypage,
      this.cart
    );
  }
}
