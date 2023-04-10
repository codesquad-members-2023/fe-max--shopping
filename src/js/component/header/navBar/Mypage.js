import { Base } from "../../Base.js";

export class Mypage extends Base {
  constructor() {
    super("div");
    this.init();
  }
  init() {
    this.setAttribute("id", "mypage");
    this.addChild();
  }

  addChild() {
    const template = `
      <span class="mypage__label">반품</span>
      <span class="mypage__text">&amp;주문</span>
    `;

    this.setTemplate(template);
  }
}
