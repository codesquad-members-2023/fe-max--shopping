const template = document.createElement("template");
template.innerHTML = `
  <div class="card-container">
    <img src="" alt="" />
    <div class="card-content">
      <h3 class="title"></h3>
      <span class="link">더보기</span>
    </div>
  </div>

  <link rel="stylesheet" href="src/styles/components/common/CardItem.css">
`;

class CardItem extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.append(template.content.cloneNode(true));
  }

  static get observedAttributes() {
    return ["data-title", "data-link", "data-img-src", "data-img-alt"];
  }

  attributeChangedCallback(name, oldVal, newVal) {
    const title = this.shadowRoot.querySelector(".title");
    const link = this.shadowRoot.querySelector(".link");
    const img = this.shadowRoot.querySelector("img");

    if (name === "data-title") {
      title.textContent = newVal;
    } else if (name === "data-link") {
      link.textContent = newVal;
    } else if (name === "data-img-src") {
      img.src = newVal;
    } else if (name === "data-img-alt") {
      img.alt = newVal;
    }
  }
}

customElements.define("card-item", CardItem);
