const template = document.createElement("template");
template.innerHTML = `
  <div class="slide-btns__container">
    <button class="slide-btn prev" type="button">
      <img src="src/assets/icons/btn-left.svg" alt="Previous Button" />
    </button>
    <button class="slide-btn next" type="button">
      <img src="src/assets/icons/btn-right.svg" alt="Next Button" />
    </button>
  </div>

  <div class="slides-container"></div>

  <link rel="stylesheet" href="src/styles/components/InfiniteCarousel.css">
`;

class InfiniteCarousel extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.append(template.content.cloneNode(true));
  }

  connectedCallback() {
    const btns = this.shadowRoot.querySelectorAll(".slide-btn");

    btns.forEach((btn) => {
      btn.addEventListener("click", () => {
        this.moveSlide(btn);
      });
    });
  }

  moveSlide(btn) {
    const offset = btn.classList.contains("next") ? 1 : -1;

    const slidesUl = this.shadowRoot.querySelector("ul");
    const slideLis = [...slidesUl.children];

    const activeSlide = slidesUl.querySelector("[data-active]");

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
    const slidesContainer = this.shadowRoot.querySelector(".slides-container");
    const ul = document.createElement("ul");
    imgs.forEach((img, idx) => {
      const li = document.createElement("li");
      if (idx === 0) li.dataset.active = true;

      li.appendChild(this.generateSlide(img));
      ul.appendChild(li);
    });
    slidesContainer.appendChild(ul);
  }

  generateSlide({ imgSrc, imgAlt }) {
    const img = document.createElement("img");
    img.src = imgSrc;
    img.alt = imgAlt;
    return img;
  }
}

customElements.define("infinite-carousel", InfiniteCarousel);
