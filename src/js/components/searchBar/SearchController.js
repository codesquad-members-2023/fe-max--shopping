import { deleteData, fetchData, fetchDataAll, saveData } from '../../utils/dataUtils.js';
import { closeAllLayers } from '../../utils/domUtils.js';
export class SearchController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    model.onChanged('defaultSuggestions', this.setDefaultSuggestions.bind(this));
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

    this.view.render();
  }

  layerRender() {
    this.view.layerRender({
      recentSearches: this.model.getRecentSearches(),
      recommendSearches: this.model.getRecommendSearches(),
      autoCompleteSearches: this.model.getAutoCompleteSearches(),
    });
  }

  async setDefaultSuggestions() {
    [this.model.recentSearches, this.model.recommendSearches] = await fetchDataAll("recentSearches?_sort=id&_order=desc&_limit=5", "recommends");
  }

  handleInputBoxEvent(type) {
    switch (type) {
      case 'openDropdownWithDefault':
        this.model.updateData("defaultSuggestions", () => {
          this.layerRender();
          this.view.openDropdown();
        });
        break;
      case 'closeDropdown':
        closeAllLayers();
        break;
    }
  }

  handleSuggestionEvent(event) {
    event.preventDefault();
    const isRemoveBtn = event.target.closest(".search-layer__remove-button");
    const textContent = event.target.closest("li").querySelector("p").textContent;

    if(isRemoveBtn) {
      this.removeRecentSearches(textContent);
      return ;
    }
    this.view.setInputBoxValue(textContent);
    this.search()
  }

  handleKeyupEvent(event) {
    const key = event.key;
    if(key === "ArrowUp" || key === "ArrowDown") {
      event.preventDefault();
      this.suggestionSelect(key);
    } else if(key === "Enter") {
      this.search();
    }
  }

  suggestionSelect(key) {
    const currentIndex = this.model.getSelectSuggestionIndex();
    const suggestion = Array.from(this.view.suggestion.children);
    const suggestionMaxIndex = suggestion.length - 1;
    
    if(currentIndex === -1) {
      const index = key === "ArrowUp" ? suggestionMaxIndex : 0;
      this.model.setSelectSuggestionIndex(index);
    } else {
      suggestion.forEach((child) => {
        if (child.classList.contains("select")) {
          child.classList.remove("select");
        }
      })
      const nextIndex = currentIndex + (key === "ArrowUp" ? -1 : 1);
      if(nextIndex < 0) {
        this.model.setSelectSuggestionIndex(suggestionMaxIndex);
      } else if(nextIndex > suggestionMaxIndex) {
        this.model.setSelectSuggestionIndex(0);
      } else {
        this.model.setSelectSuggestionIndex(nextIndex);
      }
    }

    const newIndex = this.model.getSelectSuggestionIndex();
    suggestion[newIndex].classList.add("select");
    this.view.setInputBoxValue(suggestion[newIndex].querySelector("p").textContent);
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
