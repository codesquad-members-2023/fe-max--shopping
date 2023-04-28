import { fetchData, fetchDataAll } from '../../utils/dataUtils.js';
import { closeAllLayers } from '../../utils/domUtils.js';
export class SearchController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    model.onChanged('defaultSuggestions', () => {
      return fetchDataAll('recentSearches', 'recommends') //
        // .finally(() => {
        //   render();
        //   view.openDropdown();
        // });
    });

    view.onEvent('inputBox', (event) => {
      this.handleInputBoxEvent(event);
    });
    view.onEvent('suggestion', (event) => {
      this.handleSuggestionEvent(event);
    });

    this.render();
  }

  render() {
    this.view.render({
      recentSearches: this.model.getRecentSearches(),
      recommendSearches: this.model.getRecommendSearches(),
      autoCompleteSearches: this.model.getAutoCompleteSearches(),
    });
  };

  handleInputBoxEvent(event) {
    switch (event.type) {
      case 'openDropdownWithDefault':
        this.model.updateData(() => {
          this.render();
          this.view.openDropdown();
        });
        return;
      case 'closeDropdown':
        closeAllLayers();
        return;
    }
  }

  handleSuggestionEvent(event) {}
}
