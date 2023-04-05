import { Base } from "../../Base.js";

export class LoginTooltip extends Base {
  constructor() {
    super("div");
    this.init();
  }

  init() {
    this.setAttribute("id", "login__tooltip");
    this.addChild();
    this.showLoginTooltip();
  }

  addChild() {
    this.createChild(
      "div",
      [{ name: "class", value: "login__tooltip__rectangle" }],
      null,
      "rectangle"
    );

    this.createChild(
      "button",
      [{ name: "class", value: "box__btn" }],
      "로그인",
      "boxBtn"
    );

    this.createChild(
      "span",
      [{ name: "class", value: "box__text" }],
      "기존 사용자가 아니십니까?",
      "boxText"
    );

    this.createChild(
      "a",
      [{ name: "class", value: "box__anchor" }],
      "여기에서 시작합니다.",
      "boxAnchor"
    );

    this.createChild(
      "div",
      [{ name: "class", value: "box__caption" }],
      null,
      "boxCaption",
      ["boxText", "boxAnchor"]
    );

    this.createChild(
      "div",
      [{ name: "class", value: "login__tooltip__box" }],
      null,
      "tooltipBox",
      ["boxBtn", "boxCaption"]
    );
  }

  showLoginTooltip() {
    setTimeout(() => {
      this.setAttribute("class", "show");
    }, 1000);
  }
}
