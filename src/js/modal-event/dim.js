import { constant } from "../constant.js";
import { setZindex, setOpacity } from "../util/set-style.js";
import { delay } from "../util/delay-promise.js";

async function dim() {
  setZindex(constant.mainDimmed, "1")
  await delay(500);
  setOpacity(constant.mainDimmed, "0.5");
}

async function undim() {
  setOpacity(constant.mainDimmed, "0");
  await delay(500);
  setZindex(constant.mainDimmed, "-1")
}

export { dim, undim };
