import { query, zIndex, opacity, time } from "../constant.js";
import { delay } from "../util/delay-promise.js";
import { dim, undim } from "../common/dim.js";
import { setOpacity, setSize, setZindex, setTransform } from "../util/set-style.js";

async function expandLoginModalWithDelay() {
  const expandWidthSize = "150px";
  const expandHeightSize = "258px";
  const moveToX = "290px";
  const moveToY = "-10px";

  for (const element of query.loginModalExpandContainers) {
    setSize(element, expandWidthSize, expandHeightSize);
  }
  await delay(time.loginExpandDelay);
  setOpacity(query.loginModalExpand, opacity.full);
  setTransform(query.loginModalTail, moveToX, moveToY);
}

async function hideLoginModal() {
  setZindex(query.loginModal, zIndex.lowestZ);
  setOpacity(query.loginModal, opacity.zero);
}

async function openLoginModalWithDelay() {
  await delay(time.loginOpacityDelay);
  setOpacity(query.loginModal, opacity.full);
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
  setZindex(query.loginModal, zIndex.highestZ);
  setOpacity(query.loginModal, opacity.full);
  dim();
}

function loginModalLoadEventHandler() {
  document.addEventListener("DOMContentLoaded", openLoginModalWithDelay);
}

function loginModalMouseenterEventHandler() {
  query.loginArea.addEventListener("mouseenter", expandLoginModal, {
    once: true,
  });
}

function loginModalMouseleaveEventHandler() {
  query.loginArea.addEventListener("mouseleave", closeLoginModal);
}

function loginModalClickEventHandler() {
  query.loginArea.addEventListener("click", reOpenLoginModal);
}

export {
  loginModalLoadEventHandler,
  loginModalMouseenterEventHandler,
  loginModalMouseleaveEventHandler,
  loginModalClickEventHandler,
};
