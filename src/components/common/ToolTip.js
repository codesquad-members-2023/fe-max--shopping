const template = document.createElement("template");
template.innerHTML = `
  <div class="tool-tip-container">
    <slot name="tool-tip-top-content"></slot>
    <slot name="tool-tip-bottom-content"></slot>
  </div>

  <link rel="stylesheet" href="src/styles/components/common/ToolTip.css">
`;

export class ToolTip extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.append(template.content.cloneNode(true));
  }

  connectedCallback() {
    if (!this.shadowRoot.host.classList.contains("dimmed-bg")) {
      setTimeout(this.showSelf.bind(this), 1000);
    }
  }

  showSelf() {
    this.shadowRoot.host.classList.add("is-active");

    if (this.shadowRoot.host.classList.contains("dimmed-bg")) {
      this.notifyParentToDim(true);
    }
  }

  hideSelf() {
    this.shadowRoot.host.classList.remove("is-active");

    if (this.shadowRoot.host.classList.contains("dimmed-bg")) {
      this.notifyParentToDim(false);
    }
  }

  notifyParentToDim(isActive) {
    const dimEvt = new CustomEvent("dim", {
      detail: {
        isActive: isActive,
      },
    });
    this.shadowRoot.host.getRootNode().host.dispatchEvent(dimEvt);
  }
}

customElements.define("tool-tip", ToolTip);
