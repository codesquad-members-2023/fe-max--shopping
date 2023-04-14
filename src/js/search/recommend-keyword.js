import { QUERY } from "../constant.js";
import { Keyword } from "../common/keyword-class.js";

class Recommend extends Keyword {
  constructor(keywordList) {
    super(keywordList);
    this.translateLayer();
  }

  translateLayer() {
    QUERY.SEARCH_LAYER.style.transform = `translateY(260px)`;
  }
}

export { Recommend };
