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
      this.handleInputBoxEvent({type : 'openDropdownWithDefault' });
    });
    view.onEvent('inputBox', 'blur' , () => {
      this.handleInputBoxEvent({ type : 'closeDropdown' });
    });
    view.onEvent('inputBox', 'input' , () => {
      this.handleInputBoxEvent({ type :'openDropdownWithAutocomplete' });
    });
    view.onEvent('inputBox', 'keyup' , (event) => {
      this.handleKeyupEvent(event);
    });
    view.onEvent('dropdown', 'mousedown',(event) => {
      this.handleSuggestionEvent(event);
    })
    view.onEvent('submitButton', 'click',() => {
      this.search();
    })
  }

  render() {
    this.model.clearIndex();
    this.view.render({
        state : this.model.getSearchBarState(),
        suggestion : this.model.getSuggestion(),
        selectSuggestionIndex : this.model.getSelectSuggestionIndex(),
        autocompleteText : this.model.getAutoCompleteText()
      });
  }

  async setDefaultSuggestions() {
    const fetchData = await fetchDataAll("recentSearches?_sort=id&_order=desc&_limit=5", "recommends");

    this.model.setDefaultSearches(fetchData);
    this.model.setSearchBarState("default");
    this.render();
    this.view.openDropdown();
  }

  async setAutocompleteSuggestions() {
    const searchBarState = this.model.getSearchBarState();

    if(searchBarState === "select") {
      return ;
    }

    const inputBoxValue = this.view.getInputBoxValue();
    const searchData = await fetchData(`search?text_like=${inputBoxValue}&_limit=10`);   
    this.model.setAutoSearches(searchData);
    this.model.setSearchBarState("autoComplete",inputBoxValue);
    this.render();
  }

  setNewSelectIndex(key) {
    this.model.setSearchBarState("select");
    this.model.updateSelectedIndex(key);

    const currentIndex = this.model.getSelectSuggestionIndex();
    this.view.setSelect(currentIndex);
  }

  handleInputBoxEvent(event) {
    const inputBoxValue =  this.view.getInputBoxValue();
    switch (event.type) {
      case 'openDropdownWithDefault':
        if(inputBoxValue === "") {
        this.model.setSearchBarState("default");
          this.model.updateData("defaultSuggestions");
          return ;
        }
        this.model.setSearchBarState("autoComplete",inputBoxValue);
        this.setAutocompleteSuggestions();
        this.view.openDropdown();
        break;
      case 'openDropdownWithAutocomplete':
        if(inputBoxValue.trim() === "") {
          this.model.setSearchBarState("default");
          this.model.updateData("defaultSuggestions");
          this.setDefaultSuggestions();

          return ;
        }
        this.model.setSearchBarState("autoComplete",inputBoxValue);
        this.model.updateData("autocompleteSuggestions");
        break;
      case 'closeDropdown':
        closeAllLayers();
        this.model.clearIndex();
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
    const suggestionLength = this.model.getSuggestion().length;
    if(!suggestionLength) {
      return ;
    }
    if (this.isComposing) {
      return;
    }
    const key = event.key;
    if(key === "ArrowUp" || key === "ArrowDown") {
      event.preventDefault();
      this.model.updateData(key+"Event");
      return ;
    } 

    if(key === "Enter") {
      this.search();
      return ;
    }   
    const inputBoxValue = this.view.getInputBoxValue();
    this.model.setSearchBarState("autoComplete",inputBoxValue);  
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
