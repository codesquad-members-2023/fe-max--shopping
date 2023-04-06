const template = document.createElement("template");
template.innerHTML = `
  <div class="cards-container">
    <div class="login-card">
      <primary-button data-content="로그인" data-width="160px"></primary-button>
      <p>최상의 경험을 위해 로그인하세요</p>
    </div>
  </div>

  <link rel="stylesheet" href="src/styles/components/CardsPanel.css">
`;

class CardsPanel extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.append(template.content.cloneNode(true));
  }

  static get observedAttributes() {
    return ["data-cards"];
  }

  attributeChangedCallback(name, oldVal, newVal) {
    if (name === "data-cards") {
      this.generateCardItems(JSON.parse(newVal));
    }
  }

  generateCardItems(cards) {
    const cardsContainer = this.shadowRoot.querySelector(".cards-container");

    const fragment = new DocumentFragment();

    cards.forEach(({ imgSrc, imgAlt, title, link }) => {
      const cardItem = document.createElement("card-item");
      cardItem.dataset.imgSrc = imgSrc;
      cardItem.dataset.imgAlt = imgAlt;
      cardItem.dataset.title = title;
      cardItem.dataset.link = link;

      fragment.appendChild(cardItem);
    });

    cardsContainer.appendChild(fragment);
  }
}

customElements.define("cards-panel", CardsPanel);
