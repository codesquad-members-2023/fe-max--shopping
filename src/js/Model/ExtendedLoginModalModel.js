export class ExtendedLoginModalModel {
  constructor(SearchBar) {
    this.isOpen = false;
  }

  openExtendedLoginModal() {
    this.isOpen = true;
  }

  closeExtendedLoginModal() {
    this.isOpen = false;
  }
}
