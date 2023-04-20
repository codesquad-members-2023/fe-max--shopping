import { querySelector } from "../query.js";
import { Keyword } from "../common/keyword-class.js";

class Recommend extends Keyword {
  constructor(keywordList) {
    super(keywordList);
    this.appendListToChild(querySelector.recommendKeywordList());
  }
}

export { Recommend };
