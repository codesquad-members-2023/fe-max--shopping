import { Base } from "../../Base.js";
import { LoginTooltip } from "./LoginToolTip.js";

export class Login extends Base {
  constructor() {
    super("div");
    this.loginTooltip = new LoginTooltip();
    this.init();
  }

  init() {
    this.setAttribute("id", "login");
    this.addChild();
  }

  addChild() {
    this.createChild(
      "span",
      [{ name: "class", value: "login__label" }],
      "안녕하세요, 로그인",
      "loginLabel"
    );

    this.createChild(
      "spann",
      [{ name: "class", value: "login__text" }],
      "계정 및 목록",
      "loginText"
    );

    this.setChildren(this.loginTooltip);
  }
}
