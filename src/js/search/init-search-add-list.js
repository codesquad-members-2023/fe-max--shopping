import { keyword } from "./database.js";
import { Recommend } from "./recommend-keyword.js";

const newRecommend = new Recommend(keyword.recommend);

export { newRecommend };
