import { Base } from "../Base.js";
import { NavBar } from "./navBar/NavBar.js";
import { SubNavBar } from "./subNavBar/SubNavBar.js";

export class Header extends Base {
  constructor() {
    super("header");
    this.setAttribute("id", "header");

    const navBar = new NavBar();
    const subNavBar = new SubNavBar();
    this.setChildren(navBar, subNavBar);
  }
}
