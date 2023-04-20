import { DB } from "../../../db/db.js";
import { Base } from "../../Base.js";

export class Carousel extends Base {
  constructor() {
    super("div");
    this.slideState = "stop";
    this.currentIndex = 0;
    this.autoCarousel = this.setAutoCarousel();
    this.db = new DB();

    this.init();
  }

  async init() {
    this.setAttribute("id", "carousel");
    this.maxIndex = await this.db.getCarouselImgLastIndex();
    this.carouselList = await this.db.getInitCarousselImgSrc();
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
          .map((img) => {
            return `<img class="carousel__item" src="${img}">`;
          })
          .join("")}
      </div>
    </div>`;
    this.setTemplate(template);
  }

  addBtnEvent() {
    this.prevSlideBtn.setEvent("click", this.slidePrev.bind(this));
    this.nextSlideBtn.setEvent("click", this.slideNext.bind(this));
  }

  slideTo(direction) {
    clearInterval(this.autoCarousel);
    const wrapperNode = this.wrapper.node;
    const isNext = direction === "next";
    wrapperNode.style.transition = "transform 450ms ease-in-out";
    this.slideState = direction;

    if (isNext) {
      wrapperNode.style.transform = `translateX(-200%`;
    } else {
      wrapperNode.style.transform = `translateX(0%)`;
    }
  }

  slideNext() {
    this.slideTo("next");
  }

  slidePrev() {
    this.slideTo("prev");
  }

  addEventTransition() {
    const wrapperNode = this.wrapper.node;
    wrapperNode.addEventListener(
      "transitionend",
      this.transitionHandler.bind(this)
    );
  }

  async transitionHandler(event) {
    const wrapperNode = event.currentTarget;
    this.currentIndex = this.getIndex(this.currentIndex, this.slideState);
    const newIndex = this.getIndex(this.currentIndex, this.slideState);
    const newImg = await this.db.getCarouselImgSrc(newIndex);
    wrapperNode.style.transition = "none";
    const isNext = this.slideState === "next";

    if (isNext) {
      const firstNode = wrapperNode.firstChild;
      wrapperNode.appendChild(firstNode);
      firstNode.setAttribute("src", newImg);
    } else {
      const lastNode = wrapperNode.lastChild;
      wrapperNode.prepend(lastNode);
      lastNode.setAttribute("src", newImg);
    }

    this.slideState = "stop";
    wrapperNode.style.transform = `translateX(-100%)`;
    this.autoCarousel = this.setAutoCarousel();
  }

  getIndex(index, state) {
    const isNext = state === "next";

    if (isNext) {
      return index === this.maxIndex ? 0 : index + 1;
    } else {
      return index === 0 ? this.maxIndex : index - 1;
    }
  }

  setAutoCarousel() {
    return setInterval(() => {
      this.slideNext();
    }, 10 * 1000);
  }
}
