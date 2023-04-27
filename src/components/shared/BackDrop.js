import Component from "../common/Component.js";

const BackDropPositions = Object.freeze({
  ENTIRE: { top: 0, left: 0 },
  MAIN: { top: 88, left: 0 },
});

const template = document.createElement("template");
template.innerHTML = `
  <link rel="stylesheet" href="src/styles/components/shared/BackDrop.css">
`;

class BackDrop extends Component {
  constructor() {
    super(template);
    this.listenables = []; // think of a better way to collect listenables.
    this.possessor;
  }

  connectedCallback() {
    this.addEventListener("click", () => {
      this.possessor?.dispatchCustomEvent("hideSelf");
      this.deactivate();
    });
  }

  registerListenable(newListenable) {
    this.listenables = [...this.listenables, newListenable];
    newListenable.addShowSelfListener(this.activate.bind(this));
    newListenable.addHideSelfListener(this.deactivate.bind(this));
  }

  activate({ possessor, position }) {
    this.classList.add("is-active");
    this.setPositionAndHeight(BackDropPositions[position]);
    this.possessor = possessor;
  }

  deactivate() {
    this.classList.remove("is-active");
    this.possessor = null;
  }

  setPositionAndHeight({ top, left }) {
    const { height: docHeight } = document.body.getBoundingClientRect();

    this.style.top = `${top}px`;
    this.style.left = `${left}px`;
    this.style.height = `${docHeight - top}px`;
  }
}

customElements.define("back-drop", BackDrop);
