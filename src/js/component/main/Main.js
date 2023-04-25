import { Base } from "../Base.js";
import { Carousel } from "./carousel/Carousel.js";
import { Contents } from "./contents/Contents.js";

export class Main extends Base {
  constructor() {
    super("div");
    this.carousel = new Carousel();
    this.contents = new Contents();
    this.init();
  }

  async init() {
    this.setAttribute("id", "main");
    await this.carousel.init();
    this.setChildren(this.carousel.view, this.contents);
  }
}
