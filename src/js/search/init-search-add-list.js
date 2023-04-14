import { KEYWORDS } from "./database.js";
import { Recommend } from "./recommend-keyword.js";
import { Recent } from "./recent-keyword.js";

const newRecommend = new Recommend(KEYWORDS.RECOMMEND);
const newRecent = new Recent(KEYWORDS.RECENT);

export { newRecommend, newRecent };
