import { searchBarEventHandler } from "./Search-event.js";
import { querySelector } from "../query.js";
import { KEYWORDS } from "./Database.js";
import { RecommendKeyword } from "./Keyword-recommend.js";
import { RecentKeyword } from "./Keyword-recent.js";

export function initSearchEvent() {
  const newRecommend = new RecommendKeyword(KEYWORDS.RECOMMEND);
  const newRecent = new RecentKeyword(KEYWORDS.RECENT);

  newRecommend.appendListToChild(querySelector.recommendKeywordList());
  newRecent.appendRecentList();

  searchBarEventHandler();
}
