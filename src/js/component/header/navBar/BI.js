import { Base } from "../../Base.js";

export class BI extends Base {
  constructor() {
    super("h1");
    this.setAttribute("id", "BI");
    const aNode = new Base("a");
    const BiImg = new Base("img");
    BiImg.setAttribute("src", "./src/assets/BI.svg");
    aNode.setChildren(BiImg);
    this.setChildren(aNode);
  }
}
