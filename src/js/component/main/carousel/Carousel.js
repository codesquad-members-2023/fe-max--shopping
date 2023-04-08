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
    this.addEventTransition();
  }

  addChild() {
    this.createChild(
      "img",
      [{ name: "src", value: "./src/assets/LeftButton.svg" }],
      null,
      "chevronLeftImg"
    );

    this.createChild(
      "button",
      [{ name: "class", value: "carousel__button prevSlide" }],
      null,
      "prevSlideBtn",
      ["chevronLeftImg"]
    );

    this.createChild(
      "img",
      [{ name: "src", value: "./src/assets/RightButton.svg" }],
      null,
      "chevronRightImg"
    );

    this.createChild(
      "button",
      [{ name: "class", value: "carousel__button nextSlide" }],
      null,
      "nextSlideBtn",
      ["chevronRightImg"]
    );

    this.createChild(
      "div",
      [{ name: "class", value: "carousel__btnWrapper" }],
      null,
      "btnWrapper",
      ["prevSlideBtn", "nextSlideBtn"]
    );

    const itemNodeList = this.carouselList.map((e) => {
      this.createChild(
        "div",
        [
          { name: "class", value: "carousel__item" },
          { name: "data-num", value: e },
        ],
        e,
        `item${e}`
      );

      return `item${e}`;
    });

    this.createChild(
      "div",
      [{ name: "class", value: "carousel__wrapper" }],
      null,
      "wrapper",
      itemNodeList
    );

    this.prevSlideBtn.setEvent("click", this.slidePrev.bind(this), {
      once: true,
    });
    this.nextSlideBtn.setEvent("click", this.slideNext.bind(this));

    const wrapperNode = this.wrapper.node;
    const firstNode = wrapperNode.firstChild.cloneNode(true);
    const lastNode = wrapperNode.lastChild.cloneNode(true);
    wrapperNode.appendChild(firstNode);
    wrapperNode.prepend(lastNode);
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
