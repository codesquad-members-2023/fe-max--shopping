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
      this.possessor.hideSelf();
      this.deactivate();
    });
  }

  activate({ possessor, top, left }) {
    this.shadowRoot.host.classList.add("is-active");
    this.possessor = possessor;
    this.setPositionAndHeight({ top, left });
    this.updateZIndex();
  }

  deactivate() {
    this.shadowRoot.host.classList.remove("is-active");
    this.possessor = null;
    this.resetZIndex();
  }

  setPositionAndHeight({ top, left }) {
    const { height: docHeight } = document.body.getBoundingClientRect();

    this.style.top = `${top}px`;
    this.style.left = `${left}px`;
    this.style.height = `${docHeight - top}px`;
  }

  updateZIndex() {
    this.style.zIndex = this.getPossessorZIndex() - 1;
  }

  resetZIndex() {
    this.style.zIndex = 2;
  }

  getPossessorZIndex() {
    return getComputedStyle(this.possessor).zIndex;
  }
}

customElements.define("back-drop", BackDrop);
