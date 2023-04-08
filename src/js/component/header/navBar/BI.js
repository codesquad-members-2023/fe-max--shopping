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
    this.createChild(
      "img",
      [{ name: "src", value: "./src/assets/BI.svg" }],
      null,
      "biImg"
    );

    this.createChild("a", null, null, "anchorNode", ["biImg"]);
  }
}
