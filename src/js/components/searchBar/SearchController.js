import { deleteData, fetchData, fetchDataAll, saveData } from '../../utils/dataUtils.js';
import { closeAllLayers } from '../../utils/domUtils.js';
export class SearchController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    model.onChanged('defaultSuggestions', this.setDefaultSuggestions.bind(this));
    model.onChanged('autocompleteSuggestions', this.setAutocompleteSuggestions.bind(this));
    model.onChanged('ArrowUpEvent', this.setNewSelectIndex.bind(this,'ArrowUp'));
    model.onChanged('ArrowDownEvent', this.setNewSelectIndex.bind(this,'ArrowDown'));

    view.onEvent('inputBox', 'focus', () => {
      this.handleInputBoxEvent('openDropdownWithDefault');
    });
    view.onEvent('inputBox','blur' , () => {
      this.handleInputBoxEvent('closeDropdown');
    });
    view.onEvent('inputBox','keyup' , (event) => {
      this.handleKeyupEvent(event)
    });
    view.onEvent('dropdown', 'mousedown',(event) => {
      this.handleSuggestionEvent(event);
    })
    view.onEvent('submitButton', 'click',() => {
      this.search();
    })
  }

  render() {
    this.view.render({
      state : this.model.getSearchBarState(),
      recentSearches: this.model.getRecentSearches(),
      recommendSearches: this.model.getRecommendSearches(),
      autoCompleteSearches: this.model.getAutoCompleteSearches(),
      selectSuggestionIndex : this.model.getSelectSuggestionIndex()
    });
  }

  async setDefaultSuggestions() {
    this.model.setDefaultSearches(await fetchDataAll("recentSearches?_sort=id&_order=desc&_limit=5", "recommends"));
    this.render();
    this.view.openDropdown();
  }

  setAutocompleteSuggestions() {
    this.render();
  }

  setNewSelectIndex(key) {
    this.model.updateSelectedIndex(key);
    const currentIndex = this.model.getSelectSuggestionIndex();
    this.view.setSelect(currentIndex);
  }

  handleInputBoxEvent(type) {
    switch (type) {
      case 'openDropdownWithDefault':
        this.model.updateData("defaultSuggestions");
        break;
      case 'openDropdownWithAutocomplete':
        this.model.updateData("autocompleteSuggestions")
        break;
      case 'closeDropdown':
        closeAllLayers();
        break;
    }
  }

  handleSuggestionEvent(event) {
    event.preventDefault();
    const isRemoveBtn = this.view.isRemoveButton(event.target);
    const textContent = this.view.getTextContentFromSuggestion(event.target);

    if (isRemoveBtn) {
      this.removeRecentSearches(textContent);
      return;
    }
    this.view.setInputBoxValue(textContent);
    this.search();
  }

  handleKeyupEvent(event) {
    const key = event.key;
    if(key === "ArrowUp" || key === "ArrowDown") {
      event.preventDefault();
      this.model.updateData(key+"Event");
    } else if(key === "Enter") {
      this.search();
    }
  }

  async removeRecentSearches(removeText) {
    const data = await fetchData(`recentSearches?text=${removeText}`);
    if (data.length > 0) {
      const idToRemove = data[0].id;
      await deleteData(`recentSearches/${idToRemove}`);
    }
  }

  async search() {
    const searchText = this.view.inputBox.value;
    await saveData(`recentSearches`,searchText);
  }
}
