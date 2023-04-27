export class SearchModel {
  constructor() {
    this.searchText = '';
  }

  get SearchText() {
    return this.searchText;
  }

  set SearchText(value) {
    this.searchKeyword = value;
  }
}