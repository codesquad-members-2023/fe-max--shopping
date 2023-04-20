import { querySelector } from "../query.js";
import { Keyword } from "./Keyword.js";

class Recommend extends Keyword {
  constructor(keywordList) {
    super(keywordList);
    this.appendListToChild(querySelector.recommendKeywordList());
  }
}

export { Recommend };
