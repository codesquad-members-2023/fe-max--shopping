import { $ } from "../../utils/domUtils";
import { SearchSuggestion } from "./SearchSuggestion";
import { dimMain, undimMain } from "../../utils/dimming";
import { hideElement, showElement } from "../../utils/elementVisibility";

export const initSearchBar = () => {
  initSearchSuggestion();
};

const initSearchSuggestion = () => {
  const searchSuggestion = new SearchSuggestion();
  const $searchInput = $(".search-bar__input");
  const $searchSuggestion = $(".search-suggestion");

  if (!($searchInput instanceof HTMLInputElement)) {
    throw new Error(`element${$searchInput} is not HTMLInputElement`);
  }

  $searchInput.addEventListener("focus", () => {
    dimMain();
    showElement($searchSuggestion);
  });

  $searchInput.addEventListener("blur", () => {
    undimMain();
    hideElement($searchSuggestion);
  });

  $searchSuggestion.addEventListener("mousedown", (event) => {
    event.preventDefault();
  });

  $searchSuggestion.addEventListener("click", searchSuggestion.handleDeleteButtonClick);

  $searchInput.addEventListener("keydown", (event) =>
    searchSuggestion.handleSuggestionKeyDown(event, $searchSuggestion)
  );
};
