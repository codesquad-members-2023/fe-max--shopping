export class LocationModalModel {
  constructor() {
    this.isOpen = false;
  }

  openLocationModal() {
    this.isOpen = true;
  }

  closeLocationModal() {
    this.isOpen = false;
  }
}
