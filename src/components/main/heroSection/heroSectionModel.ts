import { BASE_URL } from "../../../constants/BASE_URL";
import { fetchData } from "../../../utils/fetchData";
import { HeroImage } from "./types";

export class HeroSectionModel {
  private images: HeroImage[] = [];
  private viewIndex: number = 0;
  private intervalId: number | undefined = undefined;

  fetchImages() {
    const url = new URL("/hero_image", BASE_URL);

    return fetchData(url).then((data) => {
      this.setImages(data);
    });
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

  increaseViewIndex() {
    this.viewIndex += 1;
  }

  decreaseViewIndex() {
    if (this.viewIndex === -1) {
      return;
    }

    this.viewIndex -= 1;
  }

  setFirstViewIndex() {
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

  setIntervalId(intervalId: number) {
    this.intervalId = intervalId;
  }

  getIntervalId() {
    return this.intervalId;
  }
}
