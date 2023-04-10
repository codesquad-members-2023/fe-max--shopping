import { heroImgs, cards } from "../data/index.js";

const template = document.createElement("template");
template.innerHTML = `
  <top-header></top-header>

  <main>
    <infinite-carousel data-imgs='${JSON.stringify(
      heroImgs
    )}'></infinite-carousel>
    
    <cards-panel data-cards='${JSON.stringify(cards)}'></cards-panel>
  </main>

  <main-footer></main-footer>

  <link rel="stylesheet" href="src/styles/pages/MainPage.css">
`;

class MainPage extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.append(template.content.cloneNode(true));
  }
}

customElements.define("main-page", MainPage);
