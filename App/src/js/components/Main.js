import { addEvent } from "../utils.js";
import { Component } from "./Component.js";

function delay(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

export class Main extends Component {
  constructor({ domNode, children }) {
    super();
    this.domNode = domNode;
    this.children = children;

    addEvent("mainDim", this.dim.bind(this));
    addEvent("mainTurnUp", this.turnUp.bind(this));
  }

  dim() {
    const dimmed = this.domNode.querySelector(".dimmed");
    dimmed.className = "dimmed active";
  }

  turnUp() {
    const dimmed = this.domNode.querySelector(".dimmed");
    dimmed.className = "dimmed";
  }

  setEvent() {
    let bgIndex = 0;
    let heroIndex = 0;
    let time = 0;
    let heroMouseOver = false;

    const background = this.domNode.querySelector("#background");
    const bgUl = background.querySelector(".background__wrapper");
    let bgSlides = bgUl.querySelectorAll(".background__slide");

    function addBgSlidesTransition() {
      bgSlides.forEach((li) => {
        li.style.transition = "transform 300ms";
      });
    }

    function clearBgSlidesTransition() {
      bgSlides.forEach((li) => {
        li.style.transition = "none";
      });
    }

    function setBgSlidesTransformX() {
      bgSlides.forEach((li) => {
        li.style.transform = `translateX(-${bgIndex * 100}%)`;
      });
    }

    const limit = bgSlides.length;

    const hero = this.domNode.querySelector("#hero");
    const heroUl = hero.querySelector(".hero__wrapper");
    const heroSlides = heroUl.querySelectorAll(".hero__slide");

    hero.addEventListener("mouseover", () => {
      heroMouseOver = true;
    });

    hero.addEventListener("mouseout", () => {
      heroMouseOver = false;
    });

    function clearHeroSlideActive() {
      heroSlides.forEach((heroSlide) => {
        heroSlide.className = "hero__slide";
      });
    }

    heroSlides[0].className = "hero__slide active";

    const controlLeft = hero.querySelector(".control--left");
    const controlRight = hero.querySelector(".control--right");

    async function controlLeftHandler() {
      if (bgIndex == 0) {
        clearBgSlidesTransition();
        bgUl.insertAdjacentElement(
          "beforeend",
          bgUl.querySelector(".background__slide")
        );
        bgIndex = limit - 1;
        setBgSlidesTransformX();
        await delay(1);
        addBgSlidesTransition();
      }
      bgIndex = (bgIndex + limit - 1) % limit;
      setBgSlidesTransformX();

      heroIndex = (heroIndex - 1 + limit) % limit;

      clearHeroSlideActive();
      heroSlides[heroIndex].className = "hero__slide active";
    }

    async function controlRightHandler() {
      if (bgIndex == limit - 1) {
        clearBgSlidesTransition();
        bgUl.insertAdjacentElement(
          "afterbegin",
          bgUl.querySelector(".background__slide:last-child")
        );
        bgIndex = 0;
        setBgSlidesTransformX();
        await delay(1);
        addBgSlidesTransition();
      }
      bgIndex = (bgIndex + 1) % limit;
      setBgSlidesTransformX();

      heroIndex = (heroIndex + 1) % limit;

      clearHeroSlideActive();
      heroSlides[heroIndex].className = "hero__slide active";
    }

    controlLeft.addEventListener("click", controlLeftHandler);
    controlRight.addEventListener("click", controlRightHandler);

    setInterval(() => {
      if (time === 9) {
        controlRight.click();
        time = 0;
        return;
      }
      if(!heroMouseOver)time += 1;
    }, 1000);
  }
}
