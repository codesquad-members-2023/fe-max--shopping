import { $, addHiddenClass, removeHiddenClass, addDimmed, removeDimmed } from '../utils.js';

export class Modal {
  constructor() {
    this.allModal = document.querySelectorAll('dialog');
    this.smallLoginModal = new SmallLoginModal('login-modal__small');
    this.largeLoginModal = new LargeLoginModal('login-modal__large');
    this.locationModal = new LocationModal('location-modal');
  }

  eventHandler() {
    document.addEventListener('DOMContentLoaded', () => this.smallLoginModal.show());
    $('.login-wrap').addEventListener('mouseenter', () => this.largeLoginModal.show());
    $('.nav-main__login').addEventListener('mouseleave', () => this.largeLoginModal.close());
    $('.nav-main__location').addEventListener('mouseenter', () => this.locationModal.show());
    $('.nav-main__location').addEventListener('mouseleave', () => this.locationModal.close());
  }

  showModal(modalClass) {
    removeHiddenClass(modalClass);
    addDimmed();
  }

  closeModal(modalClass) {
    addHiddenClass(modalClass);
    removeDimmed();
  }

  closeAllModal() {
    this.allModal.forEach(modal => this.closeModal(modal.className));
  }
}

class SmallLoginModal extends Modal {
  constructor(className) {
    super();
    this.className = className;
  }

  show() {
    setTimeout(() => {
      super.showModal(this.className);
    }, 1000);
  }
}

class LargeLoginModal extends Modal {
  constructor(className) {
    super();
    this.className = className;
  }

  show() {
    super.closeAllModal();
    super.showModal(this.className);
  }

  close() {
    super.closeModal(this.className);
  }
}

class LocationModal extends Modal {
  constructor(className) {
    super();
    this.className = className;
  }

  show() {
    super.closeAllModal();
    super.showModal(this.className);
  }
  close() {
    super.closeModal(this.className);
  }
}
