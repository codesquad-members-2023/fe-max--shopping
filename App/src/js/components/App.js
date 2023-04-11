import { addComponent } from "../utils.js";
import { Component } from "./Component.js";
import { Footer } from "./Footer.js";
import { Header } from "./Header.js";
import { Main } from "./Main.js";
import { Sidebar } from "./SideBar.js";

export class App extends Component {
  constructor(innerData) {
    super();
    this.update(innerData);
  }

  update(innerData) {
    this.domNode = document.querySelector("#app");
    this.children = [];
    this.parseJsonRecursiveAppendChild(innerData.header);
    this.parseJsonRecursiveAppendChild(innerData.sidebar);
    this.parseJsonRecursiveAppendChild(innerData.main);
    this.parseJsonRecursiveAppendChild(innerData.footer);

    addComponent("HEADER", Header);
    addComponent("MAIN", Main);
    addComponent("FOOTER", Footer);
    addComponent("sidebar", Sidebar);

    this.ChangeSubComponent(true);

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
