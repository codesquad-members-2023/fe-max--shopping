import { Base } from "../../Base.js";

export class Carousel extends Base {
  constructor() {
    super("div");
    this.carouselList = [
      "./src/assets/carouselImg/carousel_5.jpg",
      "./src/assets/carouselImg/carousel_6.jpg",
      "./src/assets/carouselImg/carousel_1.jpg",
      "./src/assets/carouselImg/carousel_2.jpg",
      "./src/assets/carouselImg/carousel_3.jpg",
      "./src/assets/carouselImg/carousel_4.jpg",
    ];
    this.currentIndex = 0;
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
    wrapperNode.style.transition = "transform 450ms ease-in-out";

    if (direction === "next") {
      wrapperNode.style.transform = `translateX(-300%`;
      this.currentIndex++;
    } else {
      wrapperNode.style.transform = `translateX(-100%`;
      this.currentIndex--;
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

    wrapperNode.addEventListener("transitionend", () => {
      wrapperNode.style.transition = "none";

      if (this.currentIndex > 0) {
        const firstNode = wrapperNode.firstChild;
        wrapperNode.appendChild(firstNode);
      } else {
        const lastNode = wrapperNode.lastChild;
        wrapperNode.prepend(lastNode);
      }

      this.currentIndex = 0;
      wrapperNode.style.transform = `translateX(-200%)`;
      this.autoCarousel = this.setAutoCarousel();
    });
  }

  setAutoCarousel() {
    return setInterval(() => {
      this.slideNext();
    }, 10 * 1000);
  }
}
