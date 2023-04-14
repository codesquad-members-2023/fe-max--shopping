// input 이벤트 모음 (focus, input)

import { QUERY, DISPLAY, TIME } from "../constant.js";
import { dim, undim } from "../common/dim.js";
import { setDisplay } from "../util/set-style.js";
import { delay } from "../util/delay-promise.js";

function allDisplayNone() {
  setDisplay(QUERY.RECOMMEND_KEYWORD_LIST, DISPLAY.NONE);
  setDisplay(QUERY.RECENT_KEYWORD_LIST, DISPLAY.NONE);
  setDisplay(QUERY.AUTO_KEYWORD_LIST, DISPLAY.NONE);
}

function onClickDisplay() {
  setDisplay(QUERY.RECOMMEND_KEYWORD_LIST, DISPLAY.BLOCK);
  setDisplay(QUERY.RECENT_KEYWORD_LIST, DISPLAY.BLOCK);
  setDisplay(QUERY.AUTO_KEYWORD_LIST, DISPLAY.NONE);
}

function onInputDisplay() {
  setDisplay(QUERY.RECOMMEND_KEYWORD_LIST, DISPLAY.NONE);
  setDisplay(QUERY.RECENT_KEYWORD_LIST, DISPLAY.NONE);
  setDisplay(QUERY.AUTO_KEYWORD_LIST, DISPLAY.BLOCK);
}

const recentKeywords = [];

function setRecentKeyword(value) {
  recentKeywords.push(value);
  localStorage.setItem("recent", recentKeywords);
}

function searchBarEventHandler() {
  QUERY.SEARCH_INPUT.addEventListener("click", (e) => {
    const isEmpty = e.target.value.length === 0;
    if (isEmpty) {
      onClickDisplay();
      dim();
      return;
    }
    onInputDisplay();
    dim();
  });

  QUERY.SEARCH_INPUT.addEventListener("input", (e) => {
    const isEmpty = e.target.value.length === 0;
    if (isEmpty) {
      onClickDisplay();
      dim();
      return;
    }
    onInputDisplay();
    dim();
  });

  QUERY.SEARCH_INPUT.addEventListener("blur", async () => {
    await delay(TIME.NONE_TO_BLOCK);
    allDisplayNone();
    undim();
  });

  QUERY.SEARCH_BTN.addEventListener("click", () => {
    const searchValue = QUERY.SEARCH_INPUT.value;
    setRecentKeyword(searchValue);
  });
}

class SearchBar {
  constructor() {}
}

export { searchBarEventHandler };
