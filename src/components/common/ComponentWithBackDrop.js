import Component from "./Component.js";

export default class ComponentWithBackDrop extends Component {
  static instances = [];

  constructor(template) {
    super(template);
    this.backDrop = document.querySelector("back-drop");
    this.registerCustomEvent("hideSelf");
    ComponentWithBackDrop.instances.push(this);
  }

  addShowSelfListener(backDropCallback) {
    this.addEventListener(
      "showSelf",
      ({ detail: { position, noBackDrop } }) => {
        this.hideOtherInstances();

        this.classList.add("is-active");
        if (noBackDrop) return; // because of tooltip with no backdrop. Refactor!
        backDropCallback({ possessor: this, position });
      }
    );
  }

  addHideSelfListener(backDropCallback) {
    this.addEventListener("hideSelf", () => {
      this.classList.remove("is-active");
      backDropCallback();
    });
  }

  hideOtherInstances() {
    ComponentWithBackDrop.instances.forEach((instance) => {
      if (instance !== this) instance.dispatchCustomEvent("hideSelf");
    });
  }
}
