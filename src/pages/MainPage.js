const template = document.createElement("template");

template.innerHTML = `
  <top-header></top-header>
`;

class MainPage extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.append(template.content.cloneNode(true));
  }
}

customElements.define("main-page", MainPage);
