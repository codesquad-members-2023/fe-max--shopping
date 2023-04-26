class KeywordController {
  constructor(view, store, type) {
    this.view = view;
    this.store = store;
    this.type = type;
    this.server = this.setServerAddress();
  }

  init() {
    this.view.render();
    this.view.getKeywordHandler = this.getKeywordHandler.bind(this);
    this.view.on();
  }

  setServerAddress() {
    return BASE_URL + this.type;
  }

  getKeywordHandler() {
    fetch(this.server)
      .then((response) => response.json())
      .then((dataFromServer) => {
        this.store.setKeywords(dataFromServer);
      });
  }

  searchBarClickHandler() {}

  searchBarBlurHandler() {}
}
