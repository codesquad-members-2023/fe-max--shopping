import { AppRecipe } from "../recipes/AppRecipe.js";
import {
  addComponent,
} from "../utils/factory.js";

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

    this.recipe = AppRecipe(state);
    this.children = [];

    Object.values(this.recipe).forEach((recipe) => {
      this.appendChildComponent(recipe);
    });

    this.changeSubComponent();
  }

  onload() {
    this.children.forEach((child) => {
      child.load();
    });
  }
}
