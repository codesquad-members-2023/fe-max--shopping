import { Base } from "../Base.js";
import { NavBar } from "./navBar/NavBar.js";
import { SubNavBar } from "./subNavBar/SubNavBar.js";

export class Header extends Base {
  constructor(sideBar) {
    super("header");
    this.setAttribute("id", "header");

    const navBar = new NavBar();
    const subNavBar = new SubNavBar(sideBar);
    this.setChildren(navBar, subNavBar);
  }
}
