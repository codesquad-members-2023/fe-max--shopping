export class LoginModalController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.setEvent();
  }

  async setEvent() {
    window.addEventListener('DOMContentLoaded', () => {
      setTimeout(this.open.bind(this), 1000);
    });
  }

  open() {
    this.model.openLoginModal();
    this.view.update(this.model.isOpen);
  }
}
