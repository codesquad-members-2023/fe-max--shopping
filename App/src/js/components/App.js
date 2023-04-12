import { Recipe } from "../Recipe.js";
import { addComponent } from "../utils.js";
import { Component } from "./Component.js";
import { Footer } from "./Footer.js";
import { Header } from "./Header.js";
import { Main } from "./Main.js";
import { Sidebar } from "./SideBar.js";

export class App extends Component {
  constructor(state) {
    super();
    this.domNode = document.querySelector("#app");

    addComponent("HEADER", Header);
    addComponent("MAIN", Main);
    addComponent("FOOTER", Footer);
    addComponent("sidebar", Sidebar);

    this.recipe = new Recipe(state);
    
    const {header, sidebar, main, footer} = this.recipe

    this.children = [];
    
    this.parseJsonRecursiveAppendChild(header());
    this.parseJsonRecursiveAppendChild(sidebar());
    this.parseJsonRecursiveAppendChild(main());
    this.parseJsonRecursiveAppendChild(footer());

    this.changeSubComponent();

    this.pageLayout = {
      banner: this.children[0],
      sideBar: this.children[1],
      main: this.children[2],
      footer: this.children[3],
    };
  }

  onload() {
    for (const [name, page] of Object.entries(this.pageLayout)) {
      page.load();
    }
  }
}
