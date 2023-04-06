import { constant } from "../constant.js";
import { delay } from "../util/delay-promise.js";
import { setDisplay, setOpacity, setSize, setZindex } from "../util/set-style.js";

async function showLoginModalWithDelay() {
  await delay(1000);
  setOpacity(constant.loginModal, "1");
}

async function expandLoginModalWithDelay() {
  const expandWidth = "150px";
  const expandHeight = "258px";
  setOpacity(constant.mainDimmed, "0.5")
  for (const element of constant.loginModalExpandContainer) {
    setSize(element, expandWidth, expandHeight);
  }
  await delay(500);
  setOpacity(constant.loginModalExpand, "1");
}

async function closeLoginModalWithDelay() {
  setOpacity(constant.loginModal, "0");
  setOpacity(constant.mainDimmed, "0");
  await delay(1000);
  setDisplay(constant.loginModal, "none");
  setDisplay(constant.mainDimmed, "none");
}

function loginModalLoadEventHandler() {
  document.addEventListener("DOMContentLoaded", showLoginModalWithDelay);
}

function loginModalMouseenterEventHandler() {
  constant.loginArea.addEventListener("mouseenter", expandLoginModalWithDelay);
  constant.loginModal.addEventListener("mouseenter", expandLoginModalWithDelay);
}

function loginModalMouseleaveEventHandler() {
  constant.loginModal.addEventListener("mouseleave", closeLoginModalWithDelay);
}

export {
  loginModalLoadEventHandler,
  loginModalMouseenterEventHandler,
  loginModalMouseleaveEventHandler,
};
