import { KeywordView } from "./KeywordView.js";
import { KeywordStore } from "./KeywordStore.js";
import { KeywordController } from "./KeywordController.js";

export function initKeyword() {
  const searchLayer = document.querySelector(".search-layer > ul");
  const searchBar = document.querySelector(".search-bar");
  const searchInput = document.querySelector(".search-input");
  const searchBtn = document.querySelector(".search-button");
  const newKeywordView = new KeywordView(searchLayer, searchBar, searchInput, searchBtn);
  const newKeywordStore = new KeywordStore();
  const newKeywordController = new KeywordController(newKeywordView, newKeywordStore);
  newKeywordController.init();
}
