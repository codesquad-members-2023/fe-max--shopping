import { query } from "../constant.js";
import { dim, undim } from "../common/dim.js";

function displayNone() {
  query.searchLayer.style.display = "none";
}

function displayFlex() {
  query.searchLayer.style.display = "flex";
}

function searchFocusEventHandler() {
  query.searchInput.addEventListener("focus", () => {
    displayFlex();
    dim();
  });
  query.searchInput.addEventListener("blur", () => {
    displayNone();
    undim();
  });
}

export { searchFocusEventHandler };
