import { SearchSuggestion } from "./SearchSuggestion";
import { SearchSuggestionModel } from "./SearchSuggestionModel";
import { SearchSuggestionView } from "./SearchSuggestionView";

export const initSearchBar = () => {
  const searchSuggestion = new SearchSuggestion(
    new SearchSuggestionModel(),
    new SearchSuggestionView()
  );
  searchSuggestion.setEvent();
};
