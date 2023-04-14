import { searchBarEventHandler } from "./search-bar.js";
import { searchLayerEventHandler } from "./search-layer.js";

export function initSearchEvent() {
  searchBarEventHandler();
  searchLayerEventHandler();
}
