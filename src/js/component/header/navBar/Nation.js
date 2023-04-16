import { Base } from "../../Base.js";

export class Nation extends Base {
  constructor() {
    super("div");
    this.init();
  }
  init() {
    this.setAttribute("id", "nation");
    this.addChild();
  }

  addChild() {
    const template = `
      <span class="nation__flag">🇰🇷</span>
      <span class="nation__text">KO</span>
    `;

    this.setTemplate(template);
  }
}
