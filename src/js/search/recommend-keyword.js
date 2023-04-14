import { QUERY } from "../constant.js";
import { Keyword } from "../common/keyword-class.js";

class Recommend extends Keyword {
  constructor(keywordList) {
    super(keywordList);
    this.appendListToChild(QUERY.RECOMMEND_KEYWORD_LIST);
  }
}

export { Recommend };
