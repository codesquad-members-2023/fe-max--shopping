import { KEYWORDS } from "./database.js";
import { Recommend } from "./recommend-keyword.js";

const newRecommend = new Recommend(KEYWORDS.RECOMMEND);

export { newRecommend };
