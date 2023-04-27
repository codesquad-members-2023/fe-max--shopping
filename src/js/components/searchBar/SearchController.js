export class SearchController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.init();
    this.setEvent();
  }

  init() {
    this.view.render();
  }

  setEvent() {
    this.view.inputBox.addEventListener('focus', () => {
      this.model.fetchDefaultData((...suggestions) => {this.view.updateView(...suggestions)});
    });
  }
}
