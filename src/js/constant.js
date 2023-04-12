const query = {
  loginArea: document.querySelector(".login"),
  loginModal: document.getElementById("login-modal"),
  loginModalContainer: document.querySelector(".login-modal-container"),
  loginModalExpand: document.querySelector(".login-modal-expand"),
  loginModalExpandContainers: document.querySelectorAll(".login-modal-expand-container"),
  loginModalTail: document.getElementById("login-tail"),
  addressArea: document.querySelector(".shipping-address"),
  addressModal: document.getElementById("address-modal"),
  addressModalTail: document.getElementById("address-tail"),
  mainDimmed: document.querySelector(".dimmed"),
  slideList: document.querySelector(".slide-list"),
  slideItems: document.querySelectorAll(".slide-item"),
  prevBtn: document.getElementById("chevron-left"),
  nextBtn: document.getElementById("chevron-right"),
  searchInput: document.querySelector(".search-input"),
  searchLayer: document.querySelector(".search-layer"),
  recentKeyword: document.querySelector(".recent-keyword"),
  recommendKeyword: document.querySelector(".recommend-keyword"),
  autoKeyword: document.querySelector(".auto-keyword"),
  recentKeywordList: document.querySelector(".recent-keywords"),
  recommendKeywordList: document.querySelector(".recommend-keywords"),
  autoKeywordList: document.querySelector(".auto-keywords"),
};

const zIndex = {
  highestZ: 2,
  middleZ: 1,
  lowestZ: -1,
};

const opacity = {
  zero: 0,
  half: 0.5,
  full: 1,
};

const carousel = {
  slideCounter: 1,
  size: 1280,
  slideTransition: "transform 0.3s ease-in-out",
  noEffect: "none",
};

const time = {
  dimDelay: 300,
  loginExpandDelay: 500,
  loginOpacityDelay: 1000,
  autoSlideDelay: 10 * 1000,
};

export { query, zIndex, opacity, carousel, time };
