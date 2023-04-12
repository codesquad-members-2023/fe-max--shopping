import { query } from "../constant.js";
import { Keyword } from "../common/keyword-class.js";

class Recommend extends Keyword {
  constructor(keywordList) {
    super(keywordList);
    this.translateLayer();
  }

  translateLayer() {
    query.searchLayer.style.transform = `translateY(260px)`
  }
}

export { Recommend };
