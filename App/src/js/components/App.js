import { Recipe } from "../Recipe.js";
import {
  addComponent,
  getAccountRecipe,
  registerRecipe,
} from "../util/factory.js";

import { Component } from "./Component.js";
import { Footer } from "./Footer.js";
import { Header } from "./Header.js";
import { Login } from "./Login.js";
import { Main } from "./Main.js";
import { Search } from "./Search.js";
import { ShippingAddress } from "./ShippingAddress.js";
import { Sidebar } from "./Sidebar.js";
import { SidebarTrigger } from "./SidebarTrigger.js";

function registerComponent() {
  const useSubComponents = [
    ["HEADER", Header],
    ["MAIN", Main],
    ["FOOTER", Footer],
    ["sidebar", Sidebar],
    ["login", Login],
    ["shipping-address", ShippingAddress],
    ["sidebar-trigger", SidebarTrigger],
    ["search", Search],
  ];

  useSubComponents.forEach(([name, subComponent]) => {
    addComponent(name, subComponent);
  });
}

export class App extends Component {
  constructor(state) {
    super();
    this.domNode = document.querySelector("#app");

    registerComponent();
    registerRecipe(new Recipe(state));

    const { header, sidebar, main, footer } = getAccountRecipe();

    this.children = [];

    this.appendChildComponent(header());
    this.appendChildComponent(sidebar());
    this.appendChildComponent(main());
    this.appendChildComponent(footer());

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
