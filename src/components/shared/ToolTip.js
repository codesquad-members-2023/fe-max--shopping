import Component from "../common/Component.js";

const template = document.createElement("template");
template.innerHTML = `
  <div class="tool-tip-container">
    <slot name="tool-tip-top-content"></slot>
    <slot name="tool-tip-bottom-content"></slot>
  </div>

  <link rel="stylesheet" href="src/styles/components/shared/ToolTip.css">
`;

export class ToolTip extends Component {
  constructor() {
    super(template);
    this.backDrop = document.querySelector("back-drop");
  }

  connectedCallback() {
    if (!this.shadowRoot.host.classList.contains("dimmed-bg")) {
      setTimeout(this.showSelf.bind(this), 1000);
    }
  }

  showSelf() {
    this.shadowRoot.host.classList.add("is-active");
    if (this.shadowRoot.host.classList.contains("dimmed-bg")) {
      this.backDrop.activate({ top: 88, left: 0 });
    }
  }

  hideSelf() {
    this.shadowRoot.host.classList.remove("is-active");
    this.backDrop.deactivate();
  }
}

customElements.define("tool-tip", ToolTip);
