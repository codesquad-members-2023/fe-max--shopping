import { constant } from "../constant.js";
import { delay } from "../util/delay-promise.js";
import { dim, undim } from "./dim.js";
import {
  setOpacity,
  setSize,
  setZindex,
  setTransform,
} from "../util/set-style.js";

async function expandLoginModalWithDelay() {
  for (const element of constant.loginModalExpandContainer) {
    setSize(element, "150px", "258px");
  }
  await delay(500);
  setOpacity(constant.loginModalExpand, "1");
  setTransform(constant.loginModalTail, "290px", "-10px");
}

async function hideLoginModal() {
  setZindex(constant.loginModal, "-1");
  setOpacity(constant.loginModal, "0");
}

function preventExpand() {
  constant.loginModal.removeEventListener("mouseenter", expandLoginModal);
}

async function openLoginModalWithDelay() {
  await delay(1000);
  setOpacity(constant.loginModal, "1");
}

function expandLoginModal() {
  dim();
  expandLoginModalWithDelay();
  preventExpand();
}

function closeLoginModal() {
  undim();
  hideLoginModal();
}

function reOpenLoginModal() {
  setZindex(constant.loginModal, "2");
  setOpacity(constant.loginModal, "1");
  dim();
}

function loginModalLoadEventHandler() {
  document.addEventListener("DOMContentLoaded", openLoginModalWithDelay);
}

function loginModalMouseenterEventHandler() {
  constant.loginModal.addEventListener("mouseenter", expandLoginModal);
}

function loginModalMouseleaveEventHandler() {
  constant.loginModal.addEventListener("mouseleave", closeLoginModal);
}

function loginModalClickEventHandler() {
  constant.loginArea.addEventListener("click", reOpenLoginModal);
}

export {
  loginModalLoadEventHandler,
  loginModalMouseenterEventHandler,
  loginModalMouseleaveEventHandler,
  loginModalClickEventHandler,
};
