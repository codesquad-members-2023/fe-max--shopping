import ComponentWithBackDrop from "../common/ComponentWithBackDrop.js";

const template = document.createElement("template");
template.innerHTML = `
  <div class="tool-tip-container">
    <slot name="tool-tip-top-content"></slot>
    <slot name="tool-tip-bottom-content"></slot>
  </div>

  <link rel="stylesheet" href="src/styles/components/shared/ToolTip.css">
`;

export class ToolTip extends ComponentWithBackDrop {
  constructor() {
    super(template);

    const requiresBackDrop = this.classList.contains("dimmed-backdrop");
    this.registerCustomEvent("showSelf", {
      detail: { position: "MAIN", noBackDrop: !requiresBackDrop },
    });
    this.backDrop.registerListenable(this);
  }

  connectedCallback() {
    if (!this.classList.contains("dimmed-backdrop")) {
      setTimeout(() => this.dispatchCustomEvent("showSelf"), 1000);
    }
  }
}

customElements.define("tool-tip", ToolTip);
