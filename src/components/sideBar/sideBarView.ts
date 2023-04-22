import { $ } from "../../utils/domUtils";
import { hideElement, showElement } from "../../utils/elementVisibility";
import {
  closeSideBar,
  handleMenuViewButtonClick,
  openSideBar,
  sideBarMenu,
} from "./sideBarController";

export const menuComponent = ({ title, text }: sideBarMenu) => {
  return `
<ul>
  ${menuTitleList(title)}
  ${text.map((text: string) => `${menuItemList(text)}`).join("")}
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

const menuItemList = (text: string) => {
  return `
<li class="side-bar__menu-item">
  <div class="side-bar__menu-item-text">${text}</div>
  <img src="./src/assets/chevron-right.svg" alt="화살표 아이콘" class="chevron-icon" />
</li>
  `;
};

export const hiddenMenuComponent = ({ title, text }: sideBarMenu, MAX_LENGTH: number) => {
  const visibleText = text.slice(0, MAX_LENGTH);
  const hiddenText = text.slice(MAX_LENGTH);

  return `
<ul>
  ${menuTitleList(title)}
  ${visibleText.map((text: string) => `${menuItemList(text)}`).join("")}
  <li class="side-bar__view-all-button">
    <div class="side-bar__menu-item-text">모두 보기</div>
    <img src="./src/assets/chevron-right.svg" alt="화살표 아이콘" class="chevron-icon" />
  </li>
</ul>
<ul class="side-bar__hidden-menu-container">
  ${hiddenText.map((text: string) => `${menuItemList(text)}`).join("")}
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

  $sideBarMenu.addEventListener("click", handleMenuViewButtonClick);
  $sideBarButton.addEventListener("click", () => openSideBar($sideBar));
  $closeButton.addEventListener("click", () => closeSideBar($sideBar));
};
