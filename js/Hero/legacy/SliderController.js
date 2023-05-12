export default class SliderController {
  constructor(model, view, fetcher) {
    this.HOST_KEY = 'localhost:5050';

    this.model = model;
    this.fetcher = fetcher;
    this.view = view;

    this.view.onEvent((e) => this.handleEvent(e));
    this.model.registerObserver(this.view);

    this.fetchSliderData()
      .then((data) => this.model.update(data))
      .then(() => this.collectDOMElements())
      .then(() => this.automaticSlideAfter(this.model.automaticSlideMs));
  }

  fetchSliderData() {
    return this.fetcher.get(this.HOST_KEY, 'heroImages');
  }

  collectDOMElements() {
    this.$slider = this.view.$target.querySelector('.slider');
    this.$sliderCards = this.view.$target.querySelectorAll('.slider__card');
  }

  handleEvent(e) {
    e.stopPropagation();

    switch (e.type) {
      case 'click':
        this.clickHandler(e);
        break;

      default:
        break;
    }
  }

  clickHandler(e) {
    this.automaticSlideAfter(this.model.automaticSlideMs);

    const isLeft = !!e.target.closest('.chevron--left');
    const isRight = !isLeft && !!e.target.closest('.chevron--right');

    if (isLeft) {
      this.showPrevCard();
    } else if (isRight) {
      this.showNextCard();
    }
  }

  showNextCard() {
    const { showIndex, sliderData } = this.model;

    const nextIndex = showIndex + 1 <= sliderData.length - 1 ? showIndex + 1 : 0;

    const currentSlide = this.$slider.querySelector(`[data-index="${showIndex}"]`);
    const nextSlide = this.$slider.querySelector(`[data-index="${nextIndex}"]`);

    currentSlide.dataset.status = 'before';
    nextSlide.dataset.status = 'appear-from-after';

    setTimeout(() => {
      nextSlide.dataset.status = 'show';
      this.model.showIndex = nextIndex;
    }, 5);
  }

  showPrevCard() {
    const { showIndex, sliderData } = this.model;

    const prevIndex = showIndex - 1 >= 0 ? showIndex - 1 : sliderData.length - 1;

    const currentSlide = this.$slider.querySelector(`[data-index="${showIndex}"]`);
    const prevSlide = this.$slider.querySelector(`[data-index="${prevIndex}"]`);

    currentSlide.dataset.status = 'after';
    prevSlide.dataset.status = 'appear-from-before';

    setTimeout(() => {
      prevSlide.dataset.status = 'show';
      this.model.showIndex = prevIndex;
    }, 5);
  }

  automaticSlideAfter(ms) {
    clearInterval(this.model.intervalId);
    this.model.intervalId = setInterval(() => {
      this.showNextCard();
    }, ms);
  }
}
