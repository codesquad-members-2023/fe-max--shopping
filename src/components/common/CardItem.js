import { fetchStyles } from "../../utils/index.js";

const cssString = await fetchStyles(
  "src/styles/components/common/CardItem.css"
);

const template = document.createElement("template");
const style = document.createElement("style");

template.innerHTML = `
  <div class="card-container">
    <img src="" alt="" />
    <div class="card-content">
      <h3 class="title"></h3>
      <span>더보기</span>
    </div>
  </div>
`;
style.textContent = cssString;

class CardItem extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.append(template.content.cloneNode(true), style);
  }

  static get observedAttributes() {
    return ["data-title", "data-imgSrc", "data-imgAlt"];
  }

  attributeChangedCallback(name, oldVal, newVal) {
    const title = this.shadowRoot.querySelector(".title");
    const img = this.shadowRoot.querySelector("img");

    if (name === "data-title") {
      title.textContent = newVal;
    } else if (name === "data-imgSrc") {
      img.src = newVal;
    } else if (name === "data-imgAlt") {
      img.alt = newVal;
    }
  }
}

customElements.define("card-item", CardItem);
