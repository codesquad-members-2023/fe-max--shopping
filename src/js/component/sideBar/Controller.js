export class Controller {
  constructor(model, view, observer) {
    this.model = model;
    this.view = view;
    this.observer = observer;

    this.init();
  }

  init() {
    this.setSidebarEvent();
    this.observer.register(this);
  }

  setSidebarEvent() {
    this.view.closeBtn.setEvent('click', this.hide.bind(this))
  }

  show() {
    this.observer.notify(this);
    this.view.render();
  }

  hide() {
    this.view.close();
  }
}