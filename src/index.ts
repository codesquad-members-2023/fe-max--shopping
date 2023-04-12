import { initMain } from "./main";
import { initNavBar } from "./navBar";
import { SearchSuggestion } from "./navBar/searchBar/SearchSuggestion";

const init = () => {
  initNavBar();
  initMain();
  new SearchSuggestion();
};

document.addEventListener("DOMContentLoaded", init);
