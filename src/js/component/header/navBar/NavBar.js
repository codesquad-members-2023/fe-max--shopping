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
    this.logoNode = new BI();
    this.shippingAddress = new ShippingAddress();
    this.searchBar = new SearchBar();
    this.nation = new Nation();
    this.login = new Login();
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
}
