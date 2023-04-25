import { DB } from "../../../db/db.js";

export class Model {
  constructor() {
    this.slideState = "stop";
    this.currentIndex = 0;
    this.db = new DB();
  }

  async init() {
    this.maxIndex = await this.db.getCarouselImgLastIndex();
    this.carouselList = await this.db.getInitCarousselImgSrc();
  }
}
