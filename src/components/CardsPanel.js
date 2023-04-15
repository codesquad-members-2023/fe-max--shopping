import Component from "./common/Component.js";

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

class CardsPanel extends Component {
  constructor() {
    super(template);
    this.cardsContainer = this.shadowRoot.querySelector(".cards-container");
  }

  async connectedCallback() {
    const cardsData = await this.fetchCards();
    this.setCards(JSON.stringify(cardsData));
  }

  setCards(newVal) {
    this.dataset.cards = newVal;
  }

  async fetchCards() {
    const res = await fetch(`http://127.0.0.1:3000/cards-panel`);
    return await res.json();
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
    const fragment = new DocumentFragment();
    cards.forEach((card) => {
      fragment.appendChild(this.generateCardItem(card));
    });
    this.cardsContainer.appendChild(fragment);
  }

  generateCardItem({ imgSrc, imgAlt, title, link }) {
    const cardItem = document.createElement("card-item");
    cardItem.dataset.imgSrc = imgSrc;
    cardItem.dataset.imgAlt = imgAlt;
    cardItem.dataset.title = title;
    cardItem.dataset.link = link;
    return cardItem;
  }
}

customElements.define("cards-panel", CardsPanel);
