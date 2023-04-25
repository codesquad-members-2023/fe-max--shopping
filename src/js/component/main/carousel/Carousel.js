import { View } from "./View.js";
import { Model } from "./model.js";
import { ViewModel } from "./viewModel.js";

export class Carousel {
  constructor() {}

  async init() {
    this.model = new Model();
    await this.model.init();
    this.viewModel = new ViewModel(this.model);
    this.view = new View(this.viewModel);
  }
}
