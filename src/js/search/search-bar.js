import { querySelector } from "../query.js";
import { DISPLAY, TIME } from "../constant.js";
import { dim, undim } from "../common/dim.js";
import { setDisplay } from "../util/set-style.js";
import { delay } from "../util/delay.js";

function allDisplayNone() {
  setDisplay(querySelector.recommendKeywordList(), DISPLAY.NONE);
  setDisplay(querySelector.recentKeywordList(), DISPLAY.NONE);
  setDisplay(querySelector.autoKeywordList(), DISPLAY.NONE);
}

function onClickDisplay() {
  setDisplay(querySelector.recommendKeywordList(), DISPLAY.BLOCK);
  setDisplay(querySelector.recentKeywordList(), DISPLAY.BLOCK);
  setDisplay(querySelector.autoKeywordList(), DISPLAY.NONE);
}

function onInputDisplay() {
  setDisplay(querySelector.recommendKeywordList(), DISPLAY.NONE);
  setDisplay(querySelector.recentKeywordList(), DISPLAY.NONE);
  setDisplay(querySelector.autoKeywordList(), DISPLAY.BLOCK);
}

const recentKeywords = [];

function setRecentKeyword(value) {
  recentKeywords.push(value);
  localStorage.setItem("recent", recentKeywords);
}

export function searchBarEventHandler() {
  querySelector.searchInput().addEventListener("click", (e) => {
    const isEmpty = e.target.value.length === 0;
    if (isEmpty) {
      onClickDisplay();
      dim();
      return;
    }
    onInputDisplay();
    dim();
  });

  querySelector.searchInput().addEventListener("input", (e) => {
    const isEmpty = e.target.value.length === 0;
    if (isEmpty) {
      onClickDisplay();
      dim();
      return;
    }
    onInputDisplay();
    dim();
  });

  querySelector.searchInput().addEventListener("blur", async () => {
    await delay(TIME.NONE_TO_BLOCK);
    allDisplayNone();
    undim();
  });

  querySelector.searchBtn().addEventListener("click", () => {
    const searchValue = querySelector.searchInput().value;
    setRecentKeyword(searchValue);
  });
}
