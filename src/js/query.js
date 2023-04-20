export const querySelector = {
  loginArea: () => document.querySelector(".login"),
  loginModal: () => document.getElementById("login-modal"),
  loginModalExpand: () => document.querySelector(".login-modal-expand"),
  loginModalExpandContainer: () => document.querySelectorAll(".login-modal-expand-container"),
  loginModalTail: () => document.getElementById("login-tail"),
  addressArea: () => document.querySelector(".shipping-address"),
  addressModal: () => document.getElementById("address-modal"),
  mainDimmed: () => document.querySelector(".dimmed"),
  slideList: () => document.querySelector(".slide-list"),
  slideItems: () => document.querySelectorAll(".slide-item"),
  mainBannerContainer: () => document.querySelector("main-banner-container"),
  prevBtn: () => document.getElementById("chevron-left"),
  nextBtn: () => document.getElementById("chevron-right"),
  searchInput: () => document.querySelector(".search-input"),
  searchBtn: () => document.querySelector(".search-button"),
  recentKeyword: () => document.querySelector(".recent-keyword"),
  recommendKeyword: () => document.querySelector(".recommend-keyword"),
  autoKeyword: () => document.querySelector(".auto-keyword"),
  recentLists: () => document.querySelectorAll(".recent-keywords li"),
  recentKeywordList: () => document.querySelector(".recent-keywords"),
  recommendKeywordList: () => document.querySelector(".recommend-keywords"),
  autoKeywordList: () => document.querySelector(".auto-keywords"),
  sidebar: () => document.querySelector(".menu-sidebar"),
  menu: () => document.querySelector(".menu-container"),
};
