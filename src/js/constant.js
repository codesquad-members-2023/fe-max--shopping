export const QUERY = {
  LOGIN_AREA: document.querySelector(".login"),
  LOGIN_MODAL: document.getElementById("login-modal"),
  LOGIN_MODAL_CONTAINER: document.querySelector(".login-modal-container"),
  LOGIN_MODAL_EXPAND: document.querySelector(".login-modal-expand"),
  LOGIN_MODAL_EXPAND_CONTAINERS: document.querySelectorAll(".login-modal-expand-container"),
  LOGIN_MODAL_TAIL: document.getElementById("login-tail"),
  ADDRESS_AREA: document.querySelector(".shipping-address"),
  ADDRESS_MODAL: document.getElementById("address-modal"),
  MAIN_DIMMED: document.querySelector(".dimmed"),
  SLIDE_LIST: document.querySelector(".slide-list"),
  SLIDE_ITEMS: document.querySelectorAll(".slide-item"),
  PREV_BTN: document.getElementById("chevron-left"),
  NEXT_BTN: document.getElementById("chevron-right"),
  SEARCH_FORM: document.querySelector(".search-bar"),
  SEARCH_INPUT: document.querySelector(".search-input"),
  SEARCH_BTN: document.querySelector(".search-button"),
  SEARCH_LAYER: document.querySelector(".search-layer"),
  RECENT_KEYWORD: document.querySelector(".recent-keyword"),
  RECOMMEND_KEYWORD: document.querySelector(".recommend-keyword"),
  AUTO_KEYWORD: document.querySelector(".auto-keyword"),
  RECENT_KEYWORD_LIST: document.querySelector(".recent-keywords"),
  RECOMMEND_KEYWORD_LIST: document.querySelector(".recommend-keywords"),
  AUTO_KEYWORD_LIST: document.querySelector(".auto-keywords"),
};

export const Z_INDEX = {
  MAX_Z: 3,
  HIGHEST_Z: 2,
  MIDDLE_Z: 1,
  LOWEST_Z: -1,
};

export const OPACITY = {
  ZERO: 0,
  HALF: 0.5,
  FULL: 1,
};

export const DISPLAY = {
  BLOCK: "block",
  NONE: "NONE",
  FLEX: "FLEX",
};

export const CAROUSEL = {
  SLIDE_COUNTER: 1,
  SIZE: 1280,
  SLIDE_TRANSITION: "transform 0.3s ease-in-out",
  NO_EFFECT: "none",
};

export const TIME = {
  NONE_TO_BLOCK: 10,
  DIM_DELAY: 300,
  LOGIN_EXPAND_DELAY: 500,
  LOGIN_OPACITY_DELAY: 1000,
  AUTO_SLIDE_DELAY: 10 * 1000,
};

export const KEYWORD_LAYER = {
  CLOSE_BTN_SRC: "./src/assets/svg/close/svg",
  ARROW_TOP_RIGHT_SRC: "./src/assets/svg/arrow-top-right.svg",
};

export const BASE_URL = "http://localhost:3000";
