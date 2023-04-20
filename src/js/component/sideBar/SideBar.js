import { DB } from "../../db/db.js";
import { Backdrop } from "../Backdrop.js";
import { Base } from "../Base.js";

export class SideBar extends Base {
  constructor() {
    super("aside");
    this.db = new DB();
    this.init();
  }

  async init() {
    this.setAttribute("id", "sideBar");
    this.sideBarData = await this.db.getSideBarData();
    this.addChild();
    this.addEvent();
  }
  addChild() {
    const template = `
        <div class="sideBar__header">
            <img class="sideBar__close" src="./src/assets/close.svg">
            <span>안녕하세요, 로그인</span>
        </div>
        <div class="sideBar__main" data-elementname="sideBarMain">
          <div class="sideBar__inner__wrapper" data-elementname="innerWrapper" >
            <div class="sidebar__content__wrapper">
            ${this.setSideBarWrapper(this.sideBarData)}
            </div>
          </div>
        </div>
    `;
    this.setTemplate(template);
  }

  setSideBarWrapper(sideBarData) {
    return sideBarData
      .map((obj) => {
        return this.setSideBarContents(obj);
      })
      .join();
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

  setSideBarMenu(menuData) {
    return menuData
      .map((menu) => {
        return `
        <div class="sideBar__menu" data-menutitle="${menu}">
          <span>${menu}</span>
          <img src="./src/assets/chevron-right.svg">
        </div>`;
      })
      .join();
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
          ${this.setSideBarMenu(detailMenuData)}
          <div class="sideBar__closeMore">
            <span>간단히 보기</span>
            <img src="./src/assets/chevron-up.svg">
          </div>
        </div>
      </div>
    </div>`;
  }

  async setSideBarDetailsWrapper(title) {
    if (this.innerWrapper.detailsWrapper) {
      this.innerWrapper.detailsWrapper.node.remove();
    }

    const details = await this.db.getSetSideBarDetails(title);
    const template = `
    <div class="sideBar__details__wrapper" data-elementname="detailsWrapper">
      <div class="goBack__contents">
        <img src="./src/assets/arrow-left.svg">
        <span>주메뉴로</span>
      </div>
      <div class="details__title">${title}</div>
      ${this.setSideBarMenu(details)}
    </div>`;
    this.innerWrapper.setTemplate(template);
  }

  show() {
    this.setStyle("display", "flex");
    setTimeout(() => {
      this.setStyle("transform", "translateX(0%)");
    }, 50);
    Backdrop.show();
  }

  hide() {
    this.setStyle("transform", "translateX(-100%)");
    this.setEvent(
      "transitionend",
      () => {
        this.setStyle("display", "none");
      },
      { once: true }
    );
    Backdrop.hide();
  }

  addEvent() {
    this.setEvent("click", this.sideBarClickHandler.bind(this));
  }

  sideBarClickHandler(event) {
    const target = event.target;
    const isCloseBtn = target.classList.contains("sideBar__close");
    const isSeeMore = target.closest(".sideBar__seeMore");
    const isCloseMore = target.closest(".sideBar__closeMore");
    const isSideBarMenu = target.closest(".sideBar__menu");
    const isGoBackContents = target.closest(".goBack__contents");

    if (isCloseBtn) {
      this.hide();
      return;
    }

    if (isSeeMore) {
      this.sideBarMoreMenu.setStyle("transform", "translateY(0)");
      return;
    }

    if (isCloseMore) {
      this.sideBarMoreMenu.setStyle("transform", "translateY(-100%)");
      return;
    }

    if (isSideBarMenu) {
      const title = target.closest(".sideBar__menu").dataset.menutitle;
      this.setSideBarDetailsWrapper(title);
      this.innerWrapper.setStyle("transform", "translateX(-100%)");
      return;
    }

    if (isGoBackContents) {
      this.innerWrapper.setStyle("transform", "translateX(0%)");
      return;
    }
  }
}
