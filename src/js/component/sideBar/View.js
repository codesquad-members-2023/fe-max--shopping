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
          <div class="sideBar__inner__wrapper" data-elementname="innerWrapper">
            <div class="sidebar__content__wrapper" data-elementname="contentWrapper">
            </div>
          </div>
        </div>
    `;
    this.setTemplate(template);
  }

  render(categories) {
    this.setMainCategoriesNode(categories);
    this.setMainCategoriesEvent();
  }

  open() {
    this.setStyle("visibility", "visible");
    this.setStyle("transform", "translateX(0%)");
    Backdrop.show();
  }

  close() {
    this.setStyle("visibility", "hidden");
    this.setStyle("transform", "translateX(-100%)");
    Backdrop.hide();
  }

  setMainCategoriesNode(categories) {
    const mainCategoriesTemplate = categories
      .map((obj) => {
        return this.setSideBarContents(obj);
      })
      .join("");

    this.contentWrapper.clearChild();
    this.contentWrapper.setTemplate(mainCategoriesTemplate);
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
        <div class="sideBar__menu" data-menutitle="${menu}" data-elementname="sideBarMenu">
         <span>${menu}</span>
          ${type === "details" ? `<img src="./src/assets/chevron-right.svg">` : ""}
        </div>`;
      })
      .join("");
  }

  setSideBarDetailMenu(detailMenuData) {
    return `
    <div class="sideBar__contents">
      <div class="sideBar__seeMore" data-elementname="seeMoreBtn">
        <span>모두 보기</span>
        <img src="./src/assets/chevron-down.svg">
      </div>
      <div class="sideBar__moreMenus">
        <div class="sideBar__contents" data-elementname="sideBarMoreMenu">
          ${this.setSideBarMenu(detailMenuData, "details")}
          <div class="sideBar__closeMore" data-elementname="closeMoreBtn">
            <span>간단히 보기</span>
            <img src="./src/assets/chevron-up.svg">
          </div>
        </div>
      </div>
    </div>`;
  }

  setMainCategoriesEvent() {
    this.closeBtn.setEvent("click", this.close.bind(this));
    this.contentWrapper.seeMoreBtns.forEach((seeMoreBtn, index) => {
      seeMoreBtn.setEvent("click", this.showMoreMenu.bind(this, index));
    });
    this.contentWrapper.closeMoreBtns.forEach((closeMoreBtn, index) => {
      closeMoreBtn.setEvent("click", this.hideMoreMenu.bind(this, index));
    });
    this.contentWrapper.sideBarMenus.forEach((sideBarMenu) => {
      const title = sideBarMenu.node.dataset.menutitle;
      sideBarMenu.setEvent("click", this.showDetailCategories.bind(this, title));
    });
  }

  async showDetailCategories(title) {
    await this.onClickMenuHandler(title);
    this.setDetailCategoriesEvent();
    this.moveToDetailCategories();
  }

  async setDetailCategoriesNode(title, detailCategories) {
    if (this.innerWrapper.detailsWrapper) {
      this.innerWrapper.detailsWrapper.node.remove();
    }

    const template = `
    <div class="sideBar__details__wrapper" data-elementname="detailsWrapper">
      <div class="goBack__contents" data-elementname="backToMainBtn">
        <img src="./src/assets/arrow-left.svg">
        <span>주메뉴로</span>
      </div>
      <div class="details__title">${title}</div>
      ${this.setSideBarMenu(detailCategories)}
    </div>`;
    this.innerWrapper.setTemplate(template);
  }

  showMoreMenu(index) {
    const menuHeight = 40;
    const height = this.contentWrapper.sideBarMoreMenus[index].node.children.length * menuHeight;
    this.contentWrapper.sideBarMoreMenus[index].setStyle("maxHeight", `${height}px`);
  }

  hideMoreMenu(index) {
    this.contentWrapper.sideBarMoreMenus[index].setStyle("maxHeight", "0");
  }

  setDetailCategoriesEvent() {
    this.innerWrapper.backToMainBtn.setEvent("click", this.moveToMainCategories.bind(this));
  }

  moveToDetailCategories() {
    this.innerWrapper.setStyle("transform", "translateX(-100%)");
  }

  moveToMainCategories() {
    this.innerWrapper.setStyle("transform", "translateX(0%)");
  }
}
