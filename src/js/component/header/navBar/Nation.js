import { Base } from "../../Base.js";

export class Nation extends Base {
  constructor() {
    super("div");
    this.setAttribute("id", "nation");

    const nationFlag = new Base("span");
    nationFlag.setAttribute("class", "nation__flag");
    nationFlag.setTextContent("🇰🇷");

    const nationText = new Base("span");
    nationText.setAttribute("class", "nation__text");
    nationText.setTextContent("KO");
    this.setChildren(nationFlag, nationText);
  }
}
