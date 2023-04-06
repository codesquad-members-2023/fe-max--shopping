import { ToolTip } from "./ToolTip.js";

const link = document.createElement("link");
link.rel = "stylesheet";
link.href = "src/styles/components/common/ToolTipEnhanced.css";

class ToolTipEnhanced extends ToolTip {
  constructor() {
    super();
    this.shadowRoot.append(link);
  }

  connectedCallback() {}

  showSelf() {
    super.showSelf();
    // dim the main portion.
  }
}

customElements.define("tool-tip-enhanced", ToolTipEnhanced);
