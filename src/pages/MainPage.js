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
    this.cardsPanel = this.shadowRoot.querySelector("cards-panel");
  }

  async connectedCallback() {
    const cardsData = await this.fetchCards();
    this.cardsPanel.setCards(JSON.stringify(cardsData));
  }

  async fetchCards() {
    const res = await fetch(`http://127.0.0.1:3000/cards-panel`);
    return await res.json();
  }
}

customElements.define("main-page", MainPage);
