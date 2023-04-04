import { Base } from "../../Base.js";

export class LoginTooltip extends Base {
  constructor() {
    super("div");
    this.setAttribute("id", "login__tooltip");

    const rectangle = new Base("div");
    rectangle.setAttribute("class", "login__tooltip__rectangle");

    const boxBtn = new Base("button");
    boxBtn.setAttribute("class", "box__btn");
    boxBtn.setTextContent("로그인");

    const boxText = new Base("span");
    boxText.setAttribute("class", "box__text");
    boxText.setTextContent("기존 사용자가 아니십니까?");

    const boxAnchor = new Base("a");
    boxAnchor.setAttribute("class", "box__anchor");
    boxAnchor.setTextContent(" 여기에서 시작합니다.");

    const boxCaption = new Base("div");
    boxCaption.setAttribute("class", "box__caption");
    boxCaption.setChildren(boxText, boxAnchor);

    const tooltipBox = new Base("div");
    tooltipBox.setAttribute("class", "login__tooltip__box");
    tooltipBox.setChildren(boxBtn, boxCaption);

    this.setChildren(rectangle, tooltipBox);
    this.showLoginTooltip();
  }

  showLoginTooltip() {
    setTimeout(() => {
      this.setAttribute("class", "show");
    }, 1000);
  }
}
