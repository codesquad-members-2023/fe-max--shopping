import { querySelector } from "../query.js";
import { Z_INDEX, OPACITY, DISPLAY, TIME } from "../constant.js";
import { delay } from "../util/delay-promise.js";
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

async function openLoginModalWithDelay() {
  await delay(TIME.LOGIN_OPACITY_DELAY);
  setOpacity(querySelector.loginModal(), OPACITY.FULL);
}

function expandLoginModal() {
  dim();
  expandLoginModalWithDelay();
}

function closeLoginModal() {
  undim();
  hideLoginModal();
}

function reOpenLoginModal() {
  setZindex(querySelector.loginModal(), Z_INDEX.HIGH_Z);
  setOpacity(querySelector.loginModal(), OPACITY.FULL);
  dim();
}

function loginModalLoadEventHandler() {
  document.addEventListener("DOMContentLoaded", openLoginModalWithDelay);
}

function loginModalMouseenterEventHandler() {
  querySelector.loginArea().addEventListener("mouseenter", expandLoginModal, {
    once: true,
  });
}

function loginModalMouseleaveEventHandler() {
  querySelector.loginArea().addEventListener("mouseleave", closeLoginModal);
}

function loginModalClickEventHandler() {
  querySelector.loginArea().addEventListener("click", reOpenLoginModal);
}

export {
  loginModalLoadEventHandler,
  loginModalMouseenterEventHandler,
  loginModalMouseleaveEventHandler,
  loginModalClickEventHandler,
};
