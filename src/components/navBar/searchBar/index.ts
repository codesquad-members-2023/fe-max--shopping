import { $ } from "../../../utils/domUtils";
import { SearchSuggestion } from "./SearchSuggestion";
import { dim, undim } from "../../../utils/dimming";
import { hideElement, showElement } from "../../../utils/elementVisibility";
import { SearchSuggestionModel } from "./SearchSuggestionModel";
import { SearchSuggestionView } from "./SearchSuggestionView";
import { Z_INDEX } from "../../../constants/Z_INDEX";

export const initSearchBar = () => {
  initSearchSuggestion();
};

const initSearchSuggestion = () => {
  const searchSuggestion = new SearchSuggestion(
    new SearchSuggestionModel(),
    new SearchSuggestionView()
  );
  const $searchInput = $(".search-bar__input");
  const $searchSuggestion = $(".search-suggestion");
  const $searchBar = $(".search-bar");

  if (!($searchInput instanceof HTMLInputElement)) {
    throw new Error(`element${$searchInput} is not HTMLInputElement`);
  }

  $searchInput.addEventListener("focus", () => {
    dim(Z_INDEX.MAIN + 50);
    showElement($searchSuggestion);
    searchSuggestion.initSuggestionRender();
  });

  $searchInput.addEventListener("blur", () => {
    undim();
    hideElement($searchSuggestion);
  });

  $searchSuggestion.addEventListener("mousedown", (event) => {
    event.preventDefault();
  });

  $searchSuggestion.addEventListener(
    "click",
    searchSuggestion.handleDeleteButtonClick.bind(searchSuggestion)
  );

  $searchInput.addEventListener("keydown", (event) =>
    searchSuggestion.handleSuggestionKeyDown(event, $searchSuggestion)
  );

  $searchBar.addEventListener("submit", (event) =>
    searchSuggestion.handleSearchBarSubmit(event, $searchInput)
  );

  $searchInput.addEventListener("input", () =>
    searchSuggestion.handleSearchInputChange($searchInput)
  );
};
