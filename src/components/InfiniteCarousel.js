import Component from "./common/Component.js";

const template = document.createElement("template");
template.innerHTML = `
  <div class="slide-btns__container">
    <button class="slide-btn" data-type="prev" type="button">
      <img src="src/assets/icons/btn-left.svg" alt="Previous Button" />
    </button>
    <button class="slide-btn" data-type="next" type="button">
      <img src="src/assets/icons/btn-right.svg" alt="Next Button" />
    </button>
  </div>
  
  <ul class="slides-container"></ul>

  <link rel="stylesheet" href="src/styles/components/InfiniteCarousel.css">
`;

class InfiniteCarousel extends Component {
  constructor() {
    super(template);
    this.intervalId = null;
    this.slideAfterMs = 10000;
    this.btns = this.shadowRoot.querySelectorAll(".slide-btn");
    this.slidesUl = this.shadowRoot.querySelector(".slides-container");
  }

  connectedCallback() {
    this.btns.forEach((btn) => {
      btn.addEventListener("click", () => {
        this.moveSlide(btn.dataset.type);
        this.automaticSlideAfter(this.slideAfterMs);
      });
    });

    this.automaticSlideAfter(this.slideAfterMs);
  }

  setImages(newVal) {
    this.dataset.imgs = newVal;
  }

  automaticSlideAfter(ms) {
    clearInterval(this.intervalId);
    this.intervalId = setInterval(() => {
      this.moveSlide("next");
    }, ms);
  }

  moveSlide(btnType) {
    const offset = btnType === "next" ? 1 : -1;

    const slideLis = [...this.slidesUl.children];

    const activeSlide = this.slidesUl.querySelector("[data-active]");

    let newIdx = slideLis.indexOf(activeSlide) + offset;
    if (newIdx >= slideLis.length) newIdx = 0;
    if (newIdx < 0) newIdx = slideLis.length - 1;

    delete activeSlide.dataset.active;
    slideLis[newIdx].dataset.active = true;
  }

  static get observedAttributes() {
    return ["data-imgs"];
  }

  attributeChangedCallback(name, oldVal, newVal) {
    if (name === "data-imgs") {
      this.generateSlides(JSON.parse(newVal));
    }
  }

  generateSlides(imgs) {
    imgs.forEach((img, idx) => {
      const li = document.createElement("li");
      if (idx === 0) li.dataset.active = true;

      li.appendChild(this.generateSlide(img));
      this.slidesUl.appendChild(li);
    });
  }

  generateSlide({ imgSrc, imgAlt }) {
    const img = document.createElement("img");
    img.src = imgSrc;
    img.alt = imgAlt;
    return img;
  }
}

customElements.define("infinite-carousel", InfiniteCarousel);
