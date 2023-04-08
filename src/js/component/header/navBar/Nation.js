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
    this.createChild(
      "span",
      [{ name: "class", value: "nation__flag" }],
      "🇰🇷",
      "nationFlag"
    );

    this.createChild(
      "span",
      [{ name: "class", value: "nation__text" }],
      "KO",
      "nationText"
    );
  }
}
