import { BaseElement } from "./BaseElement";
import { LoginModalExpandContainers } from "./LoginModalExpandContainers";
import { MainDimmed } from "./common/dim";
import { expandLoginModalWithDelay } from "./expandLoginModalWithDelay";
import { LoginArea } from "./modal-event/login-modal-event-listener";

const QUERY = {
  LOGIN_MODAL: document.getElementById("login-modal"),
  LOGIN_MODAL_CONTAINER: document.querySelector(".login-modal-container"),
  ADDRESS_AREA: document.querySelector(".shipping-address"),
  ADDRESS_MODAL: document.getElementById("address-modal"),
  SLIDE_LIST: document.querySelector(".slide-list"),
  SLIDE_ITEMS: document.querySelectorAll(".slide-item"),
  PREV_BTN: document.getElementById("chevron-left"),
  NEXT_BTN: document.getElementById("chevron-right"),
  SEARCH_INPUT: document.querySelector(".search-input"),
  SEARCH_LAYER: document.querySelector(".search-layer"),
  RECENT_KEYWORD: document.querySelector(".recent-keyword"),
  RECOMMEND_KEYWORD: document.querySelector(".recommend-keyword"),
  AUTO_KEYWORD: document.querySelector(".auto-keyword"),
  RECENT_KEYWORD_LIST: document.querySelector(".recent-keywords"),
  RECOMMEND_KEYWORD_LIST: document.querySelector(".recommend-keywords"),
  AUTO_KEYWORD_LIST: document.querySelector(".auto-keywords"),
};

export const loginModalExpand = new BaseElement(document.querySelector(".login-modal-expand"));
export const loginModalTail = new BaseElement(document.getElementById("login-tail"));
export const loginModalExpandContainers = new LoginModalExpandContainers(
  document.querySelectorAll(".login-modal-expand-container")
);

export const mainDimmed = new MainDimmed(document.querySelector(".dimmed"), {});
export const loginArea = new LoginArea(document.querySelector(".login"), {
  onMouseEnter: () => {
    mainDimmed.dim();
    expandLoginModalWithDelay();
  },
});

const Z_INDEX = {
  HIGHEST_Z: 2,
  MIDDLE_Z: 1,
  LOWEST_Z: -1,
};

const OPACITY = {
  ZERO: 0,
  HALF: 0.5,
  FULL: 1,
};

const DISPLAY = {
  BLOCK: "block",
  NONE: "NONE",
  FLEX: "FLEX",
};

const CAROUSEL = {
  SLIDE_COUNTER: 1,
  SIZE: 1280,
  SLIDE_TRANSITION: "transform 0.3s ease-in-out",
  NO_EFFECT: "none",
};

const TIME = {
  NONE_TO_BLOCK: 10,
  DIM_DELAY: 300,
  LOGIN_EXPAND_DELAY: 500,
  LOGIN_OPACITY_DELAY: 1000,
  AUTO_SLIDE_DELAY: 10 * 1000,
};

const KEYWORD_LAYER = {
  CLOSE_BTN_SRC: "./src/assets/svg/close/svg",
  ARROW_TOP_RIGHT_SRC: "./src/assets/svg/arrow-top-right.svg",
};

export { QUERY, Z_INDEX, OPACITY, DISPLAY, CAROUSEL, TIME, KEYWORD_LAYER };
