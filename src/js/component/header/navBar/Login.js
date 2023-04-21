import { Base } from "../../Base.js";
import { LoginTooltip } from "./LoginToolTip.js";

export class Login extends Base {
  constructor(observer) {
    super("div");
    this.loginTooltip = new LoginTooltip(observer);
    this.init();
  }

  init() {
    this.setAttribute("id", "login");
    this.addChild();
    this.setEvent("mouseover", this.loginTooltip.show.bind(this.loginTooltip));
    this.setEvent("mouseout", this.loginTooltip.hide.bind(this.loginTooltip));
  }

  addChild() {
    const template = `
      <span class="login__label">안녕하세요, 로그인</span>
      <spann class="login__text">계정 및 목록</spann>
    `;

    this.setTemplate(template);
    this.setChildren(this.loginTooltip);
  }
}
