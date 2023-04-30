import { $ } from '../Utils.js';

export class ExtendedLoginModalController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.setEvent();
  }

  async setEvent() {
    $('.nav-main__login').addEventListener('mouseover', this.open.bind(this));
    $('.nav-main__login').addEventListener('mouseout', this.close.bind(this));
  }

  open() {
    this.model.openExtendedLoginModal();
    this.view.update(this.model.isOpen);
  }

  close() {
    this.model.closeExtendedLoginModal();
    this.view.update(this.model.isOpen);
  }
}
