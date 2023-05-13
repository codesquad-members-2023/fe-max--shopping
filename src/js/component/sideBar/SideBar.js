import { Controller } from "./Controller.js";
import { Model } from "./Model.js";
import { View } from "./View.js";

export class SideBar {
  constructor(observer) {
    this.model = new Model();
    this.view = new View();
    this.controller = new Controller(this.model, this.view, observer);

    this.init();
  }

  async init() {
    await this.model.init();
    this.controller.init();
  }
}