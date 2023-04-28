import Component from "../common/Component.js";

const template = document.createElement("template");
template.innerHTML = `
  <div class="card-container">
    <img class="card-img" src="" alt="" />
    <div class="card-content">
      <h3 class="card-title"></h3>
      <span class="card-link">더보기</span>
    </div>
  </div>

  <link rel="stylesheet" href="src/styles/components/CardItem.css">
`;

class CardItem extends Component {
  constructor() {
    super(template);
  }

  static get observedAttributes() {
    return ["data-title", "data-link", "data-img-src", "data-img-alt"];
  }

  attributeChangedCallback(name, oldVal, newVal) {
    const cardTitle = this.shadowRoot.querySelector(".card-title");
    const cardLink = this.shadowRoot.querySelector(".card-link");
    const cardImg = this.shadowRoot.querySelector(".card-img");

    if (name === "data-title") {
      cardTitle.textContent = newVal;
    } else if (name === "data-link") {
      cardLink.textContent = newVal;
    } else if (name === "data-img-src") {
      cardImg.src = newVal;
    } else if (name === "data-img-alt") {
      cardImg.alt = newVal;
    }
  }
}

customElements.define("card-item", CardItem);
