import { fetchStyles } from "../../utils/index.js";

const cssString = await fetchStyles(
  "src/styles/components/common/PrimaryButton.css"
);

const template = document.createElement("template");
const style = document.createElement("style");

template.innerHTML = `
  <button type="button"></button>
`;
style.textContent = cssString;

class PrimaryButton extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.append(template.content.cloneNode(true), style);
    this.button = this.shadowRoot.querySelector("button");
  }

  static get observedAttributes() {
    return ["data-content", "data-width"];
  }

  attributeChangedCallback(name, oldVal, newVal) {
    if (name === "data-content") {
      this.button.innerText = newVal;
    } else if (name === "data-width") {
      this.button.style.width = newVal;
    }
  }
}

customElements.define("primary-button", PrimaryButton);
