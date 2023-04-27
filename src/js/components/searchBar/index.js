import { SearchController } from "./SearchController.js";
import { SearchModel } from "./SearchModel.js";
import { SearchView } from "./SearchView.js";

export const initSearchBar = () => {
  const controller = new SearchController(new SearchModel(), new SearchView())
}