import { DB } from "../../db/db.js";

export class Model {
  constructor() {
    this.db = new DB();
  }

  async setMainCategories() {
    this.mainCategories = await this.db.getSideBarData();
  }

  async getDetailCategories(title) {
    return await this.db.getSetSideBarDetails(title);
  }
}