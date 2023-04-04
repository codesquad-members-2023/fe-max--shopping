import { Base } from "../../Base.js";
import { Menu } from "./Menu.js";

export class SubNavBar extends Base {
  #_leftButtonsData = [
    { text: "모두", symbol: "./src/assets/menu.svg" },
    { text: "오늘의 딜" },
    { text: "고객 서비스" },
    { text: "레지스트리" },
    { text: "기프트 카드" },
    { text: "판매" },
  ];

  #_rightButtonsData = { text: "지금 특가 상품 쇼핑하기" };

  constructor() {
    super("div");
    this.setAttribute("id", "subNavBar");

    this.init();
    this.setMenu();
  }

  init() {}

  setMenu() {
    const leftButtons = this.setLeftButtons();
    const rightButtons = this.setRightButtons();

    this.setChildren(leftButtons, rightButtons);
  }

  setLeftButtons() {
    const leftButtons = new Base("div");
    leftButtons.setAttribute("id", "leftButtons");

    const menuNodes = [];
    this.#_leftButtonsData.forEach((menuData) => {
      menuNodes.push(new Menu(menuData));
    });

    leftButtons.setChildren(...menuNodes);

    return leftButtons;
  }

  setRightButtons() {
    const rightButtons = new Base("div");
    rightButtons.setAttribute("id", "rightButtons");

    rightButtons.setChildren(new Menu(this.#_rightButtonsData));

    return rightButtons;
  }
}
