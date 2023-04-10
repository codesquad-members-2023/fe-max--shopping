import { query, zIndex, opacity, time } from "../constant.js";
import { setZindex, setOpacity } from "../util/set-style.js";
import { delay } from "../util/delay-promise.js";

function dim() {
  setZindex(query.mainDimmed, zIndex.middleZ);
  setOpacity(query.mainDimmed, opacity.half);
}

async function undim() {
  setOpacity(query.mainDimmed, opacity.zero);
  await delay(time.dimDelay);
  setZindex(query.mainDimmed, zIndex.lowestZ);
}

export { dim, undim };
