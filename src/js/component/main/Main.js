import { Base } from "../Base.js";
import { Carousel } from "./carousel/Carousel.js";

export class Main extends Base {
  constructor() {
    super("div");
    this.carousel = new Carousel();
    this.init();
  }

  init() {
    this.setAttribute("id", "main");
    this.setChildren(this.carousel);
  }
}
