import { Controller } from "./Controller.js";
import { Model } from "./Model.js";
import { View } from "./View.js";

export class SearchBar {
  constructor(observer) {
    this.model = new Model();
    this.view = new View();
    this.controller = new Controller(this.model, this.view, observer);
  }
}
