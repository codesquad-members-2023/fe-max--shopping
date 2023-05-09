import { $ } from '../utils.js';

export class LocationModalController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.setEvent();
  }

  async setEvent() {
    $('.nav-main__location').addEventListener('mouseover', this.open.bind(this));
    $('.nav-main__location').addEventListener('mouseout', this.close.bind(this));
  }

  open() {
    this.model.openLocationModal();
    this.view.update(this.model.isOpen);
  }

  close() {
    this.model.closeLocationModal();
    this.view.update(this.model.isOpen);
  }
}
