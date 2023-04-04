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
    this.init();
  }

  init() {
    this.setAttribute("id", "navBar");
    const logoNode = new BI();
    const shippingAddress = new ShippingAddress();
    const searchBar = new SearchBar();
    const nation = new Nation();
    const login = new Login();
    const mypage = new Mypage();
    const cart = new Cart();

    this.setChildren(
      logoNode,
      shippingAddress,
      searchBar,
      nation,
      login,
      mypage,
      cart
    );
  }
}
