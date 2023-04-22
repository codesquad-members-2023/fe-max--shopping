import { $ } from "../../utils/domUtils";
import {
  closeSideBar,
  handleMenuItemClick,
  moveMenuView,
  openSideBar,
  sideBarMenu,
} from "./sideBarController";

export const menuComponent = ({ title, menu }: sideBarMenu) => {
  return `
<ul>
  ${menuTitleList(title)}
  ${menu.map(({ id, text }: { id: number; text: string }) => `${menuItemList(id, text)}`).join("")}
</ul>
  `;
};

const menuTitleList = (title: string) => {
  return `
<li>
  <h2 class="side-bar__menu-title">${title}</h2>
</li>
  `;
};

const menuItemList = (id: number, text: string) => {
  return `
<li class="side-bar__menu-item" data-id="${id}">
  <div class="side-bar__menu-item-text">${text}</div>
  <img src="./src/assets/chevron-right.svg" alt="화살표 아이콘" class="chevron-icon" />
</li>
  `;
};

export const hiddenMenuComponent = ({ title, menu }: sideBarMenu, MAX_LENGTH: number) => {
  const visibleText = menu.slice(0, MAX_LENGTH);
  const hiddenText = menu.slice(MAX_LENGTH);

  return `
<ul>
  ${menuTitleList(title)}
  ${visibleText
    .map(({ id, text }: { id: number; text: string }) => `${menuItemList(id, text)}`)
    .join("")}
  <li class="side-bar__view-all-button">
    <div class="side-bar__menu-item-text">모두 보기</div>
    <img src="./src/assets/chevron-right.svg" alt="화살표 아이콘" class="chevron-icon" />
  </li>
</ul>
<ul class="side-bar__hidden-menu-container">
  ${hiddenText
    .map(({ id, text }: { id: number; text: string }) => `${menuItemList(id, text)}`)
    .join("")}
  <li class="side-bar__hide-button">
    <div class="side-bar__menu-item-text">간단히 보기</div>
    <img src="./src/assets/chevron-right.svg" alt="화살표 아이콘" class="chevron-icon" />
  </li>
</ul>
  `;
};

export const addSideBarEvent = () => {
  const $sideBarMenu = $(".side-bar__menu");
  const $sideBarButton = $(".sub__side-bar-button");
  const $sideBar = $(".side-bar");
  const $closeButton = $(".side-bar__close-button");
  const $menuDetailBack = $(".side-bar__menu-detail-back");

  $sideBarMenu.addEventListener("click", handleMenuItemClick);
  $sideBarButton.addEventListener("click", () => openSideBar($sideBar));
  $closeButton.addEventListener("click", () => closeSideBar($sideBar));
  $menuDetailBack.addEventListener("click", moveMenuView);
};
