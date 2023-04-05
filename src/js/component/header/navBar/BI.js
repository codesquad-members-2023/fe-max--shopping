import { Base } from "../../Base.js";

export class BI extends Base {
  constructor() {
    super("h1");
    this.setAttribute("id", "BI");

    const BiImg = new Base("img");
    BiImg.setAttribute("src", "./src/assets/BI.svg");

    const aNode = new Base("a");
    aNode.setChildren(BiImg);

    this.setChildren(aNode);
  }
}
