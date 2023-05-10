import { Backdrop } from "../Backdrop.js";
import { Base } from "../Base.js";

export class View extends Base {
  constructor() {
    super("aside");
    this.setAttribute("id", "sideBar");
    this.init();
  }

  init() {
    this.addChild();
  }

  addChild() {
    const template = `
        <div class="sideBar__header">
            <img class="sideBar__close" src="./src/assets/close.svg" data-elementname="closeBtn">
            <span>안녕하세요, 로그인</span>
        </div>
        <div class="sideBar__main" data-elementname="sideBarMain">
          <div class="sideBar__inner__wrapper" data-elementname="innerWrapper" >
          </div>
        </div>
    `;
    this.setTemplate(template);
  }

  render(categories) {
    this.setStyle("visibility", "visible");
    this.setStyle("transform", "translateX(0%)");
    this.setMainCategoriesNode(categories);
    Backdrop.show();
  }

  close() {
    this.setStyle("visibility", "hidden");
    this.setStyle("transform", "translateX(-100%)");
    Backdrop.hide();
    this.innerWrapper.clearChild();
  }

  setMainCategoriesNode(categories) {
    const mainCategoriesTemplate = categories
      .map((obj) => {
        return this.setSideBarContents(obj);
      })
      .join("");

    this.innerWrapper.clearChild();
    this.innerWrapper.setTemplate(mainCategoriesTemplate);
  }

  setSideBarContents({ title, menu }) {
    const maxLength = 4;
    const result = menu.slice(0, maxLength);
    const template = `
      <div class="sideBar__contents">
        <div class="sideBar__title">${title}</div>
        ${this.setSideBarMenu(result)}
      </div>
    `;

    if (menu.length > maxLength) {
      const detailResult = menu.slice(maxLength, menu.length);
      const detailTemplate = this.setSideBarDetailMenu(detailResult);

      return template + detailTemplate;
    }
    return template;
  }

  setSideBarMenu(menuData, type) {
    return menuData
      .map((menu) => {
        return `
        <div class="sideBar__menu" data-menutitle="${menu}">
         <span>${menu}</span>
          ${
            type === "details"
              ? `<img src="./src/assets/chevron-right.svg">`
              : ""
          }
        </div>`;
      })
      .join("");
  }

  setSideBarDetailMenu(detailMenuData) {
    return `
    <div class="sideBar__contents">
      <div class="sideBar__seeMore">
        <span>모두 보기</span>
        <img src="./src/assets/chevron-down.svg">
      </div>
      <div class="sideBar__moreMenus">
        <div class="sideBar__contents" data-elementname="sideBarMoreMenu">
          ${this.setSideBarMenu(detailMenuData, "details")}
          <div class="sideBar__closeMore">
            <span>간단히 보기</span>
            <img src="./src/assets/chevron-up.svg">
          </div>
        </div>
      </div>
    </div>`;
  }
}