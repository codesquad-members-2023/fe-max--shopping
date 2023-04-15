import Component from "../common/Component.js";

const template = document.createElement("template");
template.innerHTML = `
  <button type="button"></button>

  <link rel="stylesheet" href="src/styles/components/shared/PrimaryButton.css">
`;

class PrimaryButton extends Component {
  constructor() {
    super(template);
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
