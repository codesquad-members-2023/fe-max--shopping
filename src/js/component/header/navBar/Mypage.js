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
    this.createChild(
      "span",
      [{ name: "class", value: "mypage__label" }],
      "반품",
      "mypageLabel"
    );

    this.createChild(
      "span",
      [{ name: "class", value: "mypage__text" }],
      "&주문",
      "mypageText"
    );
  }
}
