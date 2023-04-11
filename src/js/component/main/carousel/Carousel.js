import { Base } from "../../Base.js";

export class Carousel extends Base {
  constructor() {
    super("div");
    this.carouselList = [1, 2, 3, 4, 5];
    this.currentIndex = 1;
    this.maxIndex = this.carouselList.length;
    this.autoCarousel = this.setAutoCarousel();
    this.init();
  }

  init() {
    this.setAttribute("id", "carousel");
    this.addChild();
    this.addBtnEvent();
    this.addEventTransition();
  }

  addChild() {
    const template = `
    <div id="carousel">
      <div class="carousel__btnWrapper">
        <button class="carousel__button prevSlide" data-elementname="prevSlideBtn">
          <img src="./src/assets/LeftButton.svg" /></button
        ><button class="carousel__button nextSlide" data-elementname="nextSlideBtn">
          <img src="./src/assets/RightButton.svg" />
        </button>
      </div>
      <div class="carousel__wrapper" data-elementname="wrapper">
        ${this.carouselList
          .map((listData) => {
            return `<div class="carousel__item" data-num=${listData}>${listData}</div>`;
          })
          .join("")}
      </div>
    </div>`;
    this.setTemplate(template);

    const wrapperNode = this.wrapper.node;
    const firstNode = wrapperNode.firstChild.cloneNode(true);
    const lastNode = wrapperNode.lastChild.cloneNode(true);

    wrapperNode.appendChild(firstNode);
    wrapperNode.prepend(lastNode);
  }

  addBtnEvent() {
    this.prevSlideBtn.setEvent("click", this.slidePrev.bind(this));
    this.nextSlideBtn.setEvent("click", this.slideNext.bind(this));
  }

  slideTo(direction) {
    clearInterval(this.autoCarousel);
    const wrapperNode = this.wrapper.node;

    const isNextSlideDisabled =
      direction === "next" && this.currentIndex > this.maxIndex;
    const isPrevSlideDisabled = direction === "prev" && this.currentIndex === 0;

    if (isNextSlideDisabled || isPrevSlideDisabled) {
      return;
    }

    wrapperNode.style.transition = "transform 450ms ease-in-out";
    this.currentIndex += direction === "next" ? 1 : -1;
    wrapperNode.style.transform = `translateX(-${this.currentIndex}00%)`;
    this.autoCarousel = this.setAutoCarousel();
  }

  slideNext() {
    this.slideTo("next");
  }

  slidePrev() {
    this.slideTo("prev");
  }

  addEventTransition() {
    const wrapperNode = this.wrapper.node;

    wrapperNode.addEventListener("transitionend", () => {
      if (this.currentIndex > this.maxIndex || this.currentIndex < 1) {
        this.currentIndex = Math.abs(this.currentIndex - this.maxIndex);

        wrapperNode.style.transition = "none";
        wrapperNode.style.transform = `translateX(-${this.currentIndex}00%)`;
      }
    });
  }

  setAutoCarousel() {
    return setInterval(() => {
      this.slideNext();
    }, 2 * 1000);
  }
}
