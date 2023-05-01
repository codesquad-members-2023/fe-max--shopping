import { Base } from "../../Base.js";

export class View extends Base {
  constructor(viewModel) {
    super("div");
    this.setAttribute("id", "carousel");
    this.viewModel = viewModel;
    this.autoCarousel = this.setAutoCarousel();
    this.addChild(this.viewModel.getCarouselList());
    this.addEvent();
  }
  addEvent() {
    this.addBtnEvent();
    this.addEventTransition(this.wrapper.node);
  }

  addChild(carouselList) {
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
        ${carouselList
          .map((img) => {
            return `<img class="carousel__item" src="${img}">`;
          })
          .join("")}
      </div>
    </div>`;
    this.setTemplate(template);
  }

  addEventTransition() {
    const wrapperNode = this.wrapper.node;
    wrapperNode.addEventListener(
      "transitionend",
      this.transitionHandler.bind(this)
    );
  }

  addBtnEvent() {
    this.prevSlideBtn.setEvent("click", this.slidePrev.bind(this));
    this.nextSlideBtn.setEvent("click", this.slideNext.bind(this));
  }

  slideNext() {
    this.slideTo("next");
  }

  slidePrev() {
    this.slideTo("prev");
  }

  slideTo(direction) {
    clearInterval(this.autoCarousel);
    const wrapperNode = this.wrapper.node;
    const isNext = direction === "next";
    wrapperNode.style.transition = "transform 450ms ease-in-out";
    this.viewModel.updateSlideState(direction);

    if (isNext) {
      wrapperNode.style.transform = `translateX(-200%)`;
    } else {
      wrapperNode.style.transform = `translateX(0%)`;
    }
  }

  addEventTransition(wrapperNode) {
    wrapperNode.addEventListener(
      "transitionend",
      this.transitionHandler.bind(this)
    );
  }

  async transitionHandler(event) {
    const wrapperNode = event.currentTarget;
    const slideState = this.viewModel.getSlideState();

    const currentIndex = this.viewModel.getIndex(
      this.viewModel.getCurrentIndex(),
      slideState
    );
    this.viewModel.updateCurrentIndex(currentIndex);

    const newIndex = this.viewModel.getIndex(
      this.viewModel.getCurrentIndex(),
      slideState
    );

    const newImg = await this.viewModel.getCarouselImgSrc(newIndex);
    wrapperNode.style.transition = "none";
    const isNext = slideState === "next";

    if (isNext) {
      const firstNode = wrapperNode.children[0];

      wrapperNode.appendChild(firstNode);
      firstNode.setAttribute("src", newImg);
    } else {
      const lastNode = wrapperNode.lastChild;
      wrapperNode.prepend(lastNode);
      lastNode.setAttribute("src", newImg);
    }

    this.viewModel.updateSlideState("stop");
    wrapperNode.style.transform = `translateX(-100%)`;
    this.autoCarousel = this.setAutoCarousel();
  }

  setAutoCarousel() {
    return setInterval(() => {
      this.slideNext();
    }, 10 * 1000);
  }
}

