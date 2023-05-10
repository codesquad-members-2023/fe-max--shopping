import { querySelector } from "../query.js";
import { Z_INDEX, OPACITY, DELAY_TIME } from "../constant.js";
import { setZindex, setOpacity } from "../util/set-style.js";
import { delay } from "../util/delay.js";

export function dim() {
  setZindex(querySelector.mainDimmed(), Z_INDEX.MIDDLE_Z);
  setOpacity(querySelector.mainDimmed(), OPACITY.HALF);
}

export async function undim() {
  setOpacity(querySelector.mainDimmed(), OPACITY.ZERO);
  await delay(DELAY_TIME.DIM_DELAY);
  setZindex(querySelector.mainDimmed(), Z_INDEX.LOWEST_Z);
}

export function undimOnblur(event) {
  if (event.target !== event.currentTarget) {
    undim();
  }
}
