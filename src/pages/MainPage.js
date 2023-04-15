const template = document.createElement("template");
template.innerHTML = `
  <top-header></top-header>

  <main>
    <infinite-carousel></infinite-carousel>
    <cards-panel></cards-panel>
  </main>

  <main-footer></main-footer>

  <link rel="stylesheet" href="src/styles/pages/MainPage.css">
`;

class MainPage extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.append(template.content.cloneNode(true));
    this.infiniteCarousel = this.shadowRoot.querySelector("infinite-carousel");
  }

  async connectedCallback() {
    const heroImgsData = await this.fetchHeroImgs();
    this.infiniteCarousel.setImages(JSON.stringify(heroImgsData));
  }

  async fetchHeroImgs() {
    const res = await fetch(`http://127.0.0.1:3000/hero-images`);
    return await res.json();
  }
}

customElements.define("main-page", MainPage);
