import { Keyword } from "./Keyword.js";
import { querySelector } from "../query.js";

export class AutoKeyword extends Keyword {
  constructor(keywordList) {
    super(keywordList);
  }

  InputEvent() {
    querySelector.searchInput().addEventListener("input", (e) => {
      if (e.target.value.length > 0) {
      }
    });
  }
}
