import { fetchData } from '../../utils/dataUtils.js';

export class HeroModel {
  constructor() {
    this.images = [];
    this.currentIndex = 0;
  }

  fetchImages(callback) {
    fetchData('carouselImages')
      .then((items) => {
        this.getValidIndex(items.length);
        this.updateImages(items);
      })
      .then(() => {
        callback(this.images)
      });
  }

  updateImages(items) {
    this.images = items.map(this.setStatus.bind(this));
  }

  setStatus(item, index) {
    switch (index) {
      case this.activeIndex:
        item.status = 'active';
        break;
      case this.leftIndex:
        item.status = 'left';
        break;
      case this.rightIndex:
        item.status = 'right';
        break;
      default:
        item.status = 'inactive';
    }
    return item;
  }

  getValidIndex(size) {
    this.activeIndex = (this.currentIndex + size) % size;
    this.leftIndex = (this.currentIndex - 1 + size) % size;
    this.rightIndex = (this.currentIndex + 1 + size) % size;
  }

  decreaseIndex(callback) {
    this.currentIndex = this.currentIndex - 1;
    this.getValidIndex(this.images.length);
    this.updateImages(this.images);

    callback(this.images);
  }

  increaseIndex(callback) {
    this.currentIndex = this.currentIndex + 1;
    this.getValidIndex(this.images.length);
    this.updateImages(this.images);

    callback(this.images);
  }
}
