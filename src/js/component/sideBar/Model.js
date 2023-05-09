import { DB } from "../../db/db.js";

export class Model {
  constructor() {
    this.db = new DB();
  }

  async getSideBarData() {
    return await this.db.getSideBarData();
  }
}