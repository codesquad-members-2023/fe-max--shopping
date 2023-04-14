import { QUERY, Z_INDEX, OPACITY, DISPLAY, TIME } from "../constant.js";
import { delay } from "../util/delay-promise.js";
import { dim, undim } from "../common/dim.js";
import { setOpacity, setSize, setZindex, setTransform, setDisplay } from "../util/set-style.js";

export class LoginArea {
  constructor(element, { onMouseEnter }) {
    this.element = element;
    this.element.addEventListener("mouseenter", onMouseEnter, {
      once: true,
    });
    this.element.addEventListener("mouseleave", closeLoginModal);

    this.element.addEventListener("click", reOpenLoginModal);
  }
}

// async function expandLoginModalWithDelay() {
//   const expandWidthSize = "150px";
//   const expandHeightSize = "258px";
//   const moveToX = "290px";
//   const moveToY = "-10px";

//   for (const element of QUERY.LOGIN_MODAL_EXPAND_CONTAINERS) {
//     setDisplay(element, DISPLAY.BLOCK);
//     await delay(TIME.NONE_TO_BLOCK);
//     setSize(element, expandWidthSize, expandHeightSize);
//   }
//   await delay(TIME.LOGIN_EXPAND_DELAY);
//   setOpacity(QUERY.LOGIN_MODAL_EXPAND, OPACITY.FULL);
//   setTransform(QUERY.LOGIN_MODAL_TAIL, moveToX, moveToY);
// }

async function hideLoginModal() {
  setZindex(QUERY.LOGIN_MODAL, Z_INDEX.LOWEST_Z);
  setOpacity(QUERY.LOGIN_MODAL, OPACITY.ZERO);
}

async function openLoginModalWithDelay() {
  await delay(TIME.LOGIN_OPACITY_DELAY);
  setOpacity(QUERY.LOGIN_MODAL, OPACITY.FULL);
}

function closeLoginModal() {
  undim();
  hideLoginModal();
}

function reOpenLoginModal() {
  setZindex(QUERY.LOGIN_MODAL, Z_INDEX.HIGHEST_Z);
  setOpacity(QUERY.LOGIN_MODAL, OPACITY.FULL);
  dim();
}

function loginModalLoadEventHandler() {
  document.addEventListener("DOMContentLoaded", openLoginModalWithDelay);
}

function loginModalMouseenterEventHandler() {
  QUERY.LOGIN_AREA.addEventListener("mouseenter", expandLoginModal, {
    once: true,
  });
}

function loginModalMouseleaveEventHandler() {
  QUERY.LOGIN_AREA.addEventListener("mouseleave", closeLoginModal);
}

function loginModalClickEventHandler() {
  QUERY.LOGIN_AREA.addEventListener("click", reOpenLoginModal);
}

export {
  loginModalLoadEventHandler,
  loginModalMouseenterEventHandler,
  loginModalMouseleaveEventHandler,
  loginModalClickEventHandler,
};
