import { querySelector } from "../query.js";
import { DISPLAY, TIME } from "../constant.js";
import { dim, undim } from "../common/dim.js";
import { setDisplay } from "../util/set-style.js";
import { delay } from "../util/delay.js";

function setSearchLayerDisplay(state) {
  const searchLayer = querySelector.searchLayer();
  setDisplay(searchLayer, state);
}

export function searchBarEventHandler() {
  querySelector.searchInput().addEventListener("click", () => {
    setSearchLayerDisplay(DISPLAY.BLOCK);
    dim();
  });

  querySelector.searchInput().addEventListener("blur", async () => {
    await delay(TIME.NONE_TO_BLOCK);
    setSearchLayerDisplay(DISPLAY.NONE);
    undim();
  });
}
