export default class SliderModel {
  constructor() {
    this.showIndex = 0;
    this.sliderData = [];
    this.intervalId = null;
    this.automaticSlideMs = 10000;
    this.observers = [];
  }

  update(newData) {
    this.sliderData = newData;
    this.notifyObservers();
  }

  registerObserver(observer) {
    this.observers.push(observer);
  }

  notifyObservers() {
    this.observers.forEach((observer) => observer.renderSlides(this.sliderData));
  }
}
