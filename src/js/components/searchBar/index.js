import { SearchController } from "./SearchController.js";
import { SearchModel } from "./SearchModel.js";
import { SearchView } from "./SearchView.js";
import {$} from '../../utils/domUtils.js';

export const initSearchBar = () => {
  const model = new SearchModel();
  const view = new SearchView($('.nav-bar__search'));
  const controller = new SearchController(model, view);
}