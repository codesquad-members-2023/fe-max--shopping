import { searchBarEventHandler } from "./Search-bar.js";
import { searchLayerEventHandler } from "./Search-layer.js";
import { KEYWORDS } from "./Database.js";
import { Recommend } from "./Keyword-recommend.js";
import { Recent } from "./Keyword-recent.js";

const newRecommend = new Recommend(KEYWORDS.RECOMMEND);
const newRecent = new Recent(KEYWORDS.RECENT);

export { newRecommend, newRecent };

export function initSearchEvent() {
  searchBarEventHandler();
  searchLayerEventHandler();
}
