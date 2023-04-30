export class LoginModalModel {
  constructor() {
    this.isOpen = false;
  }

  openLoginModal() {
    this.isOpen = true;
  }

  closeLoginModal() {
    this.isOpen = false;
  }
}
