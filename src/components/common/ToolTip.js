const template = document.createElement("template");
template.innerHTML = `
  <div class="tool-tip-container">
    <slot name="tool-tip-content"></slot>
  </div>

  <link rel="stylesheet" href="src/styles/components/common/ToolTip.css">
`;

class ToolTip extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.append(template.content.cloneNode(true));
  }

  connectedCallback() {
    setTimeout(() => {
      this.showSelf();
    }, 1000);
  }

  showSelf() {
    this.shadowRoot.host.classList.add("is-active");
  }

  hideSelf() {
    this.shadowRoot.host.classList.remove("is-active");
  }
}

customElements.define("tool-tip", ToolTip);
