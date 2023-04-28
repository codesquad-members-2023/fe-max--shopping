import { $ } from "../../utils/domUtils";
import { SidebarMenu } from "./types";

export class SidebarView {
  $sidebar: Element;
  $closeButton: Element;
  $sidebarButton: Element;
  $sidebarMenu: Element;
  $menuDetailBack: Element;
  $menu: Element;
  $menuContainer: Element;
  $menuDetailContainer: Element;

  constructor() {
    this.$sidebar = $(".sidebar");
    this.$sidebarMenu = $(".sidebar__menu");
    this.$closeButton = $(".sidebar__close-button");
    this.$sidebarButton = $(".sub__sidebar-button");
    this.$menuDetailBack = $(".sidebar__menu-detail-back");
    this.$menu = $(".sidebar__menu");
    this.$menuContainer = $(".sidebar__menu-container");
    this.$menuDetailContainer = $(".sidebar__menu-detail-container");
  }

  render(menu: Promise<SidebarMenu[]>) {
    menu.then((menuList) => {
      const component = menuList
        .map((menu) => {
          const MAX_LENGTH = 4;
          const isOverMaxLength = menu.menu.length > MAX_LENGTH;
          const component = isOverMaxLength
            ? this.hiddenMenuComponent(menu, MAX_LENGTH)
            : this.createMenuComponent(menu);

          return component;
        })
        .join("");

      this.$menu.insertAdjacentHTML("beforeend", component);
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

  renderDetailView(data: SidebarMenu) {
    this.$menuDetailContainer.innerHTML = this.createMenuComponent(data);
  }
}
