export class ViewModel {
  constructor(model) {
    this.model = model;
  }

  getCarouselList() {
    return this.model.carouselList;
  }

  getSlideState() {
    return this.model.SlideState;
  }

  getCurrentIndex() {
    return this.model.currentIndex;
  }

  async getCarouselImgSrc(newIndex) {
    return await this.model.db.getCarouselImgSrc(newIndex);
  }

  getIndex(index, state) {
    const isNext = state === "next";

    if (isNext) {
      return index === this.model.maxIndex ? 0 : index + 1;
    } else {
      return index === 0 ? this.model.maxIndex : index - 1;
    }
  }

  updeateCurrentIndex(currentIndex) {
    this.model.currentIndex = currentIndex;
  }

  updateSlideState(state) {
    this.model.SlideState = state;
  }
}
