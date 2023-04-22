import { searchBarEventHandler } from "./Search-bar.js";
import { querySelector } from "../query.js";
import { KEYWORDS } from "./Database.js";
import { Recommend } from "./Keyword-recommend.js";
import { Recent } from "./Keyword-recent.js";

export function initSearchEvent() {
  const newRecommend = new Recommend(KEYWORDS.RECOMMEND);
  const newRecent = new Recent(KEYWORDS.RECENT);

  newRecommend.appendListToChild(querySelector.recommendKeywordList());
  newRecent.appendRecentList();

  searchBarEventHandler();
}
