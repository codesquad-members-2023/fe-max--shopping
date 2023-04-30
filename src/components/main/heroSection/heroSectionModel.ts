import { HeroImage } from "./types";

export class HeroSectionModel {
  private viewIndex: number = 0;
  private images: HeroImage[] = [];
  private intervalId: number | undefined = undefined;

  increaseViewIndex() {
    this.viewIndex += 1;
  }

  decreaseViewIndex() {
    if (this.viewIndex === -1) {
      return;
    }

    this.viewIndex -= 1;
  }

  setFisrtViewIndex() {
    this.viewIndex = 1;
  }

  setLastViewIndex() {
    this.viewIndex = this.images.length - 2;
  }

  getViewIndex() {
    return this.viewIndex;
  }

  setViewIndex(index: number) {
    this.viewIndex = index;
  }

  isUnderflowImageIndex() {
    return this.viewIndex < 0;
  }

  isOverflowImageIndex() {
    return this.viewIndex > this.images.length - 1;
  }

  setImages(data: HeroImage[]) {
    this.images = data;
  }

  getImages() {
    return this.images;
  }

  getImageCount() {
    return this.images.length;
  }

  setIntervalId(intervalId: number) {
    this.intervalId = intervalId;
  }

  getIntervalId() {
    return this.intervalId;
  }
}
