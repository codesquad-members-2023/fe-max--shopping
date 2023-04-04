import { Base } from "../../Base.js";

export class Login extends Base {
  constructor() {
    super("div");
    this.setAttribute("id", "login");

    const loginLabel = new Base("span");
    loginLabel.setAttribute("class", "login__label");
    loginLabel.setTextContent("안녕하세요, 로그인");

    const loginText = new Base("span");
    loginText.setAttribute("class", "login__text");
    loginText.setTextContent("계정 및 목록");

    this.setChildren(loginLabel, loginText);
  }
}
