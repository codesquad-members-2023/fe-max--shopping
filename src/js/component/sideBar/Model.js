import { DB } from "../../db/db.js";

export class Model {
  constructor() {
    this.db = new DB();
    this.notifies = {};
    this.isSideBarOpened = false;
    this.isMenuCompressed = [];
  }

  async init() {
    await this.setMainCategories();
    this.isMenuCompressed = this.mainCategories.map(() => true);
  }

  register(prop, notify) {
    this.notifies[prop] = notify;
  }

  async setMainCategories() {
    this.mainCategories = await this.db.getSideBarData();
  }

  getMainCategories() {
    return this.mainCategories;
  }

  async setDetailCategories(title) {
    this.detailCategories =  await this.db.getSetSideBarDetails(title);
    this.notifies.notifyDetail(title);
  }

  getDetailCategories() {
    return this.detailCategories;
  }

  setIsSideBarOpened(state) {
    this.isSideBarOpened = state;
    this.notifies.notifyToggle();
  }

  getIsSideBarOpened() {
    return this.isSideBarOpened;
  }

  setMoreMenuCompressed(index, state) {
    this.isMenuCompressed[index] = state;
    this.notifies.notifyCompress(index);
  }

  getMoreMenuCompressed(index) {
    return this.isMenuCompressed[index];
  }
}