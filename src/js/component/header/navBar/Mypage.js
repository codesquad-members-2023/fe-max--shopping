import { Base } from "../../Base.js";

export class Mypage extends Base {
  constructor() {
    super("div");
    this.setAttribute("id", "mypage");

    const mypageLabel = new Base("span");
    mypageLabel.setAttribute("class", "mypage__label");
    mypageLabel.setTextContent("반품");

    const mypageText = new Base("span");
    mypageText.setAttribute("class", "mypage__text");
    mypageText.setTextContent("&주문");

    this.setChildren(mypageLabel, mypageText);
  }
}
