import { query } from "../constant.js";

export class Keyword {
  constructor(keywordList) {
    this.keywordList = keywordList;
  }

  appendListToChild() {
    for (const keyword of this.keywordList) {
      const parent = query.recommendKeywordList;
      const newList = document.createElement("li");
      const insertNewList = parent.appendChild(newList);
      insertNewList.textContent = keyword;
    }
  }
}
