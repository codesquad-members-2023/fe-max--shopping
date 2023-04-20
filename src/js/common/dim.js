import { querySelector } from "../query.js";
import { Z_INDEX, OPACITY, TIME } from "../constant.js";
import { setZindex, setOpacity } from "../util/set-style.js";
import { delay } from "../util/delay-promise.js";

function dim() {
  setZindex(querySelector.mainDimmed(), Z_INDEX.MIDDLE_Z);
  setOpacity(querySelector.mainDimmed(), OPACITY.HALF);
}

async function undim() {
  setOpacity(querySelector.mainDimmed(), OPACITY.ZERO);
  await delay(TIME.DIM_DELAY);
  setZindex(querySelector.mainDimmed(), Z_INDEX.LOWEST_Z);
}

function undimOnblur(event) {
  if (event.target !== event.currentTarget) {
    undim();
  }
}

export { dim, undim, undimOnblur };
