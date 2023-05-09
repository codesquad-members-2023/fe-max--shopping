import { fetchDataAll } from '../../utils/dataUtils.js';
import { closeAllLayers } from '../../utils/domUtils.js';
export class SearchController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

   model.onChanged('defaultSuggestions', this.setDefaultSuggestions.bind(this));

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

  async setDefaultSuggestions() {
    [this.model.recentSearches, this.model.recommendSearches] = await fetchDataAll('recentSearches', 'recommends')
  }

  handleInputBoxEvent(event) {
    switch (event.type) {
      case 'openDropdownWithDefault':
        this.model.updateData("defaultSuggestions", () => {
          this.render();
          this.view.openDropdown();
        });
        break;
      case 'closeDropdown':
        closeAllLayers();
        break;
    }
  }

  handleSuggestionEvent(event) {}
}
