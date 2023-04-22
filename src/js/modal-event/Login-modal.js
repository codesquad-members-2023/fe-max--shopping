import { querySelector } from "../query.js";
import { Z_INDEX, OPACITY, DISPLAY, TIME } from "../constant.js";
import { delay } from "../util/delay.js";
import { dim, undim } from "../common/dim.js";
import { setOpacity, setSize, setZindex, setTransform, setDisplay } from "../util/set-style.js";

async function expandLoginModalWithDelay() {
  const expandWidthSize = "150px";
  const expandHeightSize = "258px";
  const moveToX = "290px";
  const moveToY = "-10px";

  for (const element of querySelector.loginModalExpandContainer()) {
    setDisplay(element, DISPLAY.BLOCK);
    await delay(TIME.NONE_TO_BLOCK);
    setSize(element, expandWidthSize, expandHeightSize);
  }
  await delay(TIME.LOGIN_EXPAND_DELAY);
  setOpacity(querySelector.loginModalExpand(), OPACITY.FULL);
  setTransform(querySelector.loginModalTail(), moveToX, moveToY);
}

async function hideLoginModal() {
  setZindex(querySelector.loginModal(), Z_INDEX.LOWEST_Z);
  setOpacity(querySelector.loginModal(), OPACITY.ZERO);
}

export async function openLoginModalWithDelay() {
  await delay(TIME.LOGIN_OPACITY_DELAY);
  setOpacity(querySelector.loginModal(), OPACITY.FULL);
}

export function expandLoginModal() {
  dim();
  expandLoginModalWithDelay();
}

export function closeLoginModal() {
  undim();
  hideLoginModal();
}

export function reopenLoginModal() {
  setZindex(querySelector.loginModal(), Z_INDEX.HIGH_Z);
  setOpacity(querySelector.loginModal(), OPACITY.FULL);
  dim();
}
