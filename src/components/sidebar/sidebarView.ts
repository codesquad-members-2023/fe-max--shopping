import { Z_INDEX } from "../../constants/Z_INDEX";
import { dim, undim } from "../../utils/dimming";
import { $ } from "../../utils/domUtils";
import { hideElement, showElement } from "../../utils/elementVisibility";
import { SidebarMenu } from "./types";

export class SidebarView {
  private $sidebar: Element;
  private $sidebarMenu: Element;
  private $closeButton: Element;
  private $sidebarButton: Element;
  private $menuDetailBack: Element;
  private $menu: Element;

  constructor() {
    this.$sidebar = $(".sidebar");
    this.$sidebarMenu = $(".sidebar__menu");
    this.$closeButton = $(".sidebar__close-button");
    this.$sidebarButton = $(".sub__sidebar-button");
    this.$menuDetailBack = $(".sidebar__menu-detail-back");
    this.$menu = $(".sidebar__menu");

    this.bindSidebarEvents();
  }

  render(menu: Promise<SidebarMenu[]>) {
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

  createMenuComponent({ title, menu }: SidebarMenu) {
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
        <h2 class="sidebar__menu-title">${title}</h2>
      </li>`;
  }

  private createMenuItemList(id: number, text: string) {
    return `
      <li class="sidebar__menu-item" data-id="${id}">
        <div class="sidebar__menu-item-text">${text}</div>
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
        <li class="sidebar__view-all-button">
          <div class="sidebar__menu-item-text">모두 보기</div>
          <img src="./src/assets/chevron-right.svg" alt="화살표 아이콘" class="chevron-icon" />
        </li>
      </ul>
      <ul class="sidebar__hidden-menu-container">
        ${hiddenText
          .map(
            ({ id, text }: { id: number; text: string }) => `${this.createMenuItemList(id, text)}`
          )
          .join("")}
        <li class="sidebar__hide-button">
          <div class="sidebar__menu-item-text">간단히 보기</div>
          <img src="./src/assets/chevron-right.svg" alt="화살표 아이콘" class="chevron-icon" />
        </li>
      </ul>`;
  }

  private openSidebar() {
    showElement(this.$sidebar);
    dim(Z_INDEX.SIDEBAR);
  }

  private closeSideBar() {
    hideElement(this.$sidebar);
    undim();
  }

  bindSidebarMenuClickHandler(handler: (event: Event) => void) {
    this.$sidebarMenu.addEventListener("click", handler);
  }

  bindMenuDetailBackClickHandler(handler: (event: Event) => void) {
    this.$menuDetailBack.addEventListener("click", handler);
  }

  bindSidebarEvents() {
    this.$sidebarButton.addEventListener("click", this.openSidebar.bind(this));
    this.$closeButton.addEventListener("click", this.closeSideBar.bind(this));
  }
}
