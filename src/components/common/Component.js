export default class Component extends HTMLElement {
  constructor(template) {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    const styleResetLink = document.createElement("link");
    styleResetLink.rel = "stylesheet";
    styleResetLink.href = "src/styles/config/reset.css";
    shadowRoot.append(template.content.cloneNode(true), styleResetLink);
    this.customEvents = {};
  }

  registerCustomEvent(evtType, options) {
    this.customEvents[evtType] = new CustomEvent(evtType, options);
  }

  dispatchCustomEvent(evtType) {
    this.dispatchEvent(this.customEvents[evtType]);
  }
}
