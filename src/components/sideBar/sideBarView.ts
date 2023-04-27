import { Z_INDEX } from "../../constants/Z_INDEX";
import { dim, undim } from "../../utils/dimming";
import { $ } from "../../utils/domUtils";
import { hideElement, showElement } from "../../utils/elementVisibility";
import { SidebarMenu } from "./types";

export class SidebarView {
  private $sideBar: Element;
  private $sideBarMenu: Element;
  private $closeButton: Element;
  private $sideBarButton: Element;
  private $menuDetailBack: Element;
  private $menu: Element;

  constructor() {
    this.$sideBar = $(".side-bar");
    this.$sideBarMenu = $(".side-bar__menu");
    this.$closeButton = $(".side-bar__close-button");
    this.$sideBarButton = $(".sub__side-bar-button");
    this.$menuDetailBack = $(".side-bar__menu-detail-back");
    this.$menu = $(".side-bar__menu");

    this.bindSideBarEvents();
  }

  public render(menu: Promise<SidebarMenu[]>) {
    menu.then((menuList) => {
      menuList.forEach((menu: SidebarMenu) => {
        const MAX_LENGTH = 4;
        const isOverMaxLength = menu.menu.length > MAX_LENGTH;
        const component = isOverMaxLength
          ? this.hiddenMenuComponent(menu, MAX_LENGTH)
          : this.createMenuComponent(menu);

        this.$menu.insertAdjacentHTML("beforeend", component);
      });
    });
  }

  public createMenuComponent({ title, menu }: SidebarMenu) {
    return `
      <ul>
        ${this.createMenuTitleList(title)}
        ${menu
          .map(
            ({ id, text }: { id: number; text: string }) => `${this.createMenuItemList(id, text)}`
          )
          .join("")}
      </ul>`;
  }

  private createMenuTitleList(title: string) {
    return `
      <li>
        <h2 class="side-bar__menu-title">${title}</h2>
      </li>`;
  }

  private createMenuItemList(id: number, text: string) {
    return `
      <li class="side-bar__menu-item" data-id="${id}">
        <div class="side-bar__menu-item-text">${text}</div>
        <img src="./src/assets/chevron-right.svg" alt="화살표 아이콘" class="chevron-icon" />
      </li>`;
  }

  private hiddenMenuComponent({ title, menu }: SidebarMenu, MAX_LENGTH: number) {
    const visibleText = menu.slice(0, MAX_LENGTH);
    const hiddenText = menu.slice(MAX_LENGTH);

    return `
      <ul>
        ${this.createMenuTitleList(title)}
        ${visibleText
          .map(
            ({ id, text }: { id: number; text: string }) => `${this.createMenuItemList(id, text)}`
          )
          .join("")}
        <li class="side-bar__view-all-button">
          <div class="side-bar__menu-item-text">모두 보기</div>
          <img src="./src/assets/chevron-right.svg" alt="화살표 아이콘" class="chevron-icon" />
        </li>
      </ul>
      <ul class="side-bar__hidden-menu-container">
        ${hiddenText
          .map(
            ({ id, text }: { id: number; text: string }) => `${this.createMenuItemList(id, text)}`
          )
          .join("")}
        <li class="side-bar__hide-button">
          <div class="side-bar__menu-item-text">간단히 보기</div>
          <img src="./src/assets/chevron-right.svg" alt="화살표 아이콘" class="chevron-icon" />
        </li>
      </ul>`;
  }

  private openSideBar() {
    showElement(this.$sideBar);
    dim(Z_INDEX.SIDE_BAR);
  }

  private closeSideBar() {
    hideElement(this.$sideBar);
    undim();
  }

  public bindSidebarMenuClickHandler(handler: (event: Event) => void) {
    this.$sideBarMenu.addEventListener("click", handler);
  }

  public bindMenuDetailBackClickHandler(handler: (event: Event) => void) {
    this.$menuDetailBack.addEventListener("click", handler);
  }

  public bindSideBarEvents() {
    this.$sideBarButton.addEventListener("click", this.openSideBar.bind(this));
    this.$closeButton.addEventListener("click", this.closeSideBar.bind(this));
  }
}
