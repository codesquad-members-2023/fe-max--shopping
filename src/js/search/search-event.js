import { QUERY } from "../constant.js";
import { dim, undim } from "../common/dim.js";

function displayNone() {
  QUERY.SEARCH_LAYER.style.display = "none";
}

function displayFlex() {
  QUERY.SEARCH_LAYER.style.display = "flex";
}

function searchFocusEventHandler() {
  QUERY.SEARCH_INPUT.addEventListener("focus", () => {
    displayFlex();
    dim();
  });
  QUERY.SEARCH_INPUT.addEventListener("blur", () => {
    displayNone();
    undim();
  });
}

export { searchFocusEventHandler };
