import { Base } from "../../Base.js";

export class BI extends Base {
  constructor() {
    super("h1");
    this.init();
  }

  init() {
    this.setAttribute("id", "bi");
    this.addChild();
  }

  addChild() {
    const template = `
      <a>
        <img src="./src/assets/BI.svg">
      </a>
    `;

    this.setTemplate(template);
  }
}
