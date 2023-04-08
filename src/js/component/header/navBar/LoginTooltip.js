import { Base } from "../../Base.js";
import { accountContentsList, myList } from "./tooltipList.js";

export class LoginTooltip extends Base {
  #_myList = myList;
  #_accountContentsList = accountContentsList;

  constructor(backdrop) {
    super("div");
    this.backdrop = backdrop;
    this.init();
  }

  init() {
    this.setAttribute("id", "login__tooltip");
    this.addChild();
    this.showLoginTooltip();
  }

  showLoginTooltip() {
    setTimeout(() => {
      this.setAttribute("class", "show");
    }, 1000);
  }

  showTooltipHandler() {
    this.setStyle("display", "block");
    this.backdrop.setStyle("display", "block");
    this["tooltipDetailBox"].setStyle("display", "flex");
    this.setStyle("left", "-225px");
    this["rectangle"].setStyle("left", "250px");

    this["tooltipBox"].setChildren(this["tooltipDetailBox"]);
  }

  hideTooltipHandler() {
    this.backdrop.setStyle("display", "none");
    this.setStyle("display", "none");
  }

  addChild() {
    this.addDetailTooltip();
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
      ["boxBtn", "boxCaption", "tooltipDetailBox"]
    );
  }

  addDetailTooltip() {
    this.setMyList();
    this.setAccountContentsList();

    this.createChild(
      "div",
      [{ name: "class", value: "login__tooltip__detailBox" }],
      null,
      "tooltipDetailBox",
      ["myList", "accountContentsList"]
    );
  }

  setMyList() {
    this.createChild(
      "div",
      [{ name: "class", value: "detailBox__title" }],
      "귀하의 목록",
      "myList__title"
    );
    this.createChild(
      "div",
      [{ name: "class", value: "detailBox__myList" }],
      null,
      "myList",
      ["myList__title"]
    );

    this.#_myList.forEach((listData) => {
      this.createChild(
        "div",
        [{ name: "class", value: `${listData.name} detailBox__list` }],
        listData.text,
        listData.name
      );
      this["myList"].setChildren(this[listData.name]);
    });
  }

  setAccountContentsList() {
    this.createChild(
      "div",
      [{ name: "class", value: "detailBox__title" }],
      "계정",
      "accountContentsList__title"
    );

    this.createChild(
      "div",
      [{ name: "class", value: "detailBox__accountContentsList" }],
      null,
      "accountContentsList",
      ["accountContentsList__title"]
    );

    this.#_accountContentsList.forEach((contentsList) => {
      this.createChild(
        "div",
        [{ name: "class", value: `${contentsList.name} detailBox__list` }],
        contentsList.text,
        contentsList.name
      );
      this["accountContentsList"].setChildren(this[contentsList.name]);
    });
  }
}
