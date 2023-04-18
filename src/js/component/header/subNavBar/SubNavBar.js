import { Base } from "../../Base.js";

export class SubNavBar extends Base {
  #_leftButtonsData = [
    {
      text: "모두",
      tagName: "button",
      symbol: "./src/assets/menu.svg",
      dataset: "sideBarBtn",
    },
    { text: "오늘의 딜", tagName: "a" },
    { text: "고객 서비스", tagName: "a" },
    { text: "레지스트리", tagName: "a" },
    { text: "기프트 카드", tagName: "a" },
    { text: "판매", tagName: "a" },
  ];

  #_rightButtonsData = [{ text: "지금 특가 상품 쇼핑하기", tagName: "a" }];

  constructor(sideBar) {
    super("div");
    this.sideBar = sideBar;

    this.init();
  }

  init() {
    this.setAttribute("id", "subNavBar");
    this.setMenu();
    this.sideBarBtn.setEvent("click", this.sideBar.show.bind(this.sideBar));
  }

  setMenu() {
    this.setLeftButtons();
    this.setRightButtons();
  }

  setLeftButtons() {
    const template = `
    <div id="leftButtons">
      ${this.#_leftButtonsData
        .map((data) => {
          const btnClass =
            data.tagName === "button" ? "class='sideBarBtn'" : "";
          const btnSymbol = data.symbol ? `<img src="${data.symbol}">` : "";
          const btnnDataset = data.dataset
            ? `data-elementname='${data.dataset}'`
            : "";

          return `
            <div class="subNavBar__menu">
              <${data.tagName} ${btnClass} ${btnnDataset}>
                ${btnSymbol}
                <span class="menu__text">${data.text}</span>
              </${data.tagName}>
            </div>`;
        })
        .join("")}
    </div>`;
    this.setTemplate(template);
  }

  setRightButtons() {
    const template = `
    <div id="rightButtons">
    ${this.#_rightButtonsData
      .map((data) => {
        return `
      <div class="subNavBar__menu">
        <${data.tagName} ${
          data.tagName === "button" ? "class=sideBarBtn" : ""
        } >
          ${data.symbol ? `<img src="${data.symbol}">` : ""}
          <span class="menu__text">${data.text}</span>
        </${data.tagName}>
      </div>`;
      })
      .join("")}
    </div>
    `;
    this.setTemplate(template);
  }
}
