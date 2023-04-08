import { Base } from "../../Base.js";

export class ShippingTooltip extends Base {
  constructor(backdrop) {
    super("div");
    this.backdrop = backdrop;
    this.init();
  }
  init() {
    this.setAttribute("id", "shippingAddress__tooltip");
    this.addchild();
  }

  showTooltipHandler() {
    this.backdrop.setStyle("display", "block");
    this.setStyle("display", "flex");
  }

  hideTooltipHandler() {
    this.backdrop.setStyle("display", "none");
    this.setStyle("display", "none");
  }

  addchild() {
    this.createChild(
      "div",
      [{ name: "class", value: "shipping__tooltip__rectangle" }],
      null,
      "rectangle"
    );

    this.createChild(
      "span",
      [{ name: "class", value: "tooltip__text" }],
      "KR으로 배송할 품목을 표시하겠습니다. 다른 국가로 배송되는 품목을 보려면 배송 주소를 변경하십시오",
      "tooltipText"
    );

    this.createChild(
      "button",
      [{ name: "class", value: "tooltip__continueBtn" }],
      "계속",
      "continueBtn"
    );
    this.createChild(
      "button",
      [{ name: "class", value: "tooltip__changeAddressBtn" }],
      "주소 변경",
      "changeAddressBtn"
    );

    this.createChild(
      "div",
      [{ name: "class", value: "tooltip__btnWrapper" }],
      null,
      "btnWrapper",
      ["continueBtn", "changeAddressBtn"]
    );

    this.createChild(
      "div",
      [{ name: "class", value: "shipping__tooltip__box" }],
      null,
      "tooltipBox",
      ["tooltipText", "btnWrapper"]
    );
  }
}
