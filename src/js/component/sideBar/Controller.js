export class Controller {
  constructor(model, view, observer) {
    this.model = model;
    this.view = view;
    this.observer = observer;

    this.init();
  }

  init() {
    this.model.setMainCategories();
    this.setSideBarEvent();
    this.observer.register(this);
  }

  setSideBarEvent() {
    this.view.closeBtn.setEvent('click', this.hide.bind(this))
  }

  show() {
    this.observer.notify(this);

    this.setSideBarContents();
  } 

  hide() {
    this.view.close();
  }

  setSideBarContents() {
    console.log(this.model.mainCategories);
    this.view.render(this.model.mainCategories);
  }
}