export class SearchController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.init();
    this.setEvent();
  }

  init() {
    this.updateView();
  }

  setEvent() {

  }

  updateView() {
    this.view.render();
  }
}
