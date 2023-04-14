import { QUERY, Z_INDEX, OPACITY, TIME } from "../constant.js";
import { setZindex, setOpacity } from "../util/set-style.js";
import { delay } from "../util/delay-promise.js";

function dim() {
  setZindex(QUERY.MAIN_DIMMED, Z_INDEX.MIDDLE_Z);
  setOpacity(QUERY.MAIN_DIMMED, OPACITY.HALF);
}

async function undim() {
  setOpacity(QUERY.MAIN_DIMMED, OPACITY.ZERO);
  await delay(TIME.DIM_DELAY);
  setZindex(QUERY.MAIN_DIMMED, Z_INDEX.LOWEST_Z);
}

function undimOnblur(event) {
  if (event.target !== event.currentTarget) {
    undim();
  }
}

export { dim, undim, undimOnblur };
