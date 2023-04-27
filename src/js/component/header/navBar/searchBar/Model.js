import { DB } from "../../../../db/db.js";

export class Model {
  constructor() {
    this.db = new DB();
    this.keywordList = [];
    this.keywordNodes = [];
    this.maxIndex = 0;
    this.selectIndex = -1;
  }

  async init() {
    await this.setLayerContent();
  }

  async setLayerContent() {
    this.recommendKeywords = await this.db.getRecommend();
    this.searchHistory = await this.db.getSearchHistory();
  }

  async getAutoComplete(inputText) {
    return await this.db.getAutoComplete(inputText);
  }

  setSavesSearchHistory(inputText) {
    this.db.savesSearchHistory(inputText);
  }

  setRemoveSearchHistory(id) {
    this.db.removeSearchHistory(id);
  }
}
