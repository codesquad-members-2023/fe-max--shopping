import { QUERY } from "../constant.js";
import { Keyword } from "../common/keyword-class.js";

class Recent extends Keyword {
  constructor(keywordList) {
    super(keywordList);
    this.appendRecentList();
  }

  appendDeleteBtn() {
    const recentLists = document.querySelectorAll(".recent-keywords li");
    for (const item of recentLists) {
      const newImg = document.createElement("img");
      const insertNewImg = item.appendChild(newImg);
      insertNewImg.setAttribute("src", "./src/assets/svg/close.svg");
      insertNewImg.className = "delete-btn";
    }
  }

  appendRecentList() {
    this.appendListToChild(QUERY.RECENT_KEYWORD_LIST);
    this.appendDeleteBtn();
  }
}

export { Recent };
