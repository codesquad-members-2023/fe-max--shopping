import Component from "../common/Component.js";

const template = document.createElement("template");
template.innerHTML = `
  <link rel="stylesheet" href="src/styles/components/shared/BackDrop.css">
`;

class BackDrop extends Component {
  constructor() {
    super(template);
  }

  connectedCallback() {
    this.addEventListener("click", () => {
      this.deactivate();
      this.possessor.hideSelf();
      this.setPossessor(null);
    });
  }

  activate({ top, left }) {
    this.shadowRoot.host.classList.add("is-active");
    this.setPositionAndHeight({ top, left });
  }

  deactivate() {
    this.shadowRoot.host.classList.remove("is-active");
  }

  setPossessor(possessor) {
    this.possessor = possessor;
  }

  setPositionAndHeight({ top, left }) {
    const { height: docHeight } = document.body.getBoundingClientRect();

    this.style.top = `${top}px`;
    this.style.left = `${left}px`;
    this.style.height = `${docHeight - top}px`;
  }
}

customElements.define("back-drop", BackDrop);
