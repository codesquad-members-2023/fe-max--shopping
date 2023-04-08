import { Base } from "../../Base.js";
import { LoginTooltip } from "./LoginToolTip.js";

export class Login extends Base {
  constructor(backdrop) {
    super("div");
    this.loginTooltip = new LoginTooltip(backdrop);
    this.init();
  }

  init() {
    this.setAttribute("id", "login");
    this.addChild();
    this.setEvent(
      "mouseover",
      this.loginTooltip.showTooltipHandler.bind(this.loginTooltip)
    );
    this.setEvent(
      "mouseout",
      this.loginTooltip.hideTooltipHandler.bind(this.loginTooltip)
    );
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
