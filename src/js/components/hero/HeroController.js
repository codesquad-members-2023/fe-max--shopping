export class HeroController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.init();
    this.setButtonsEventHandler();
  }

  init() {
    this.model.fetchImages((images) => { this.view.init(images) });
  }

  updateView(images) {
    this.view.updateImages(images);
  }

  slideToPrevImage() {
    this.model.decreaseIndex((images) => { this.updateView(images) });
  }

  slideToNextImage() {
    this.model.increaseIndex((images) => { this.updateView(images) });
  }

  setButtonsEventHandler() {
    this.view.setPrevButtonEventHandler(() => { this.slideToPrevImage() });
    this.view.setNextButtonEventHandler(() => { this.slideToNextImage() });
  }
}