import { BASE_URL } from "../../constants/BASE_URL";
import { $ } from "../../utils/domUtils";
import { hideElement, showElement } from "../../utils/elementVisibility";
import { fetchData } from "../../utils/fetchData";

interface sideBarMenu {
  title: string;
  text: string[];
}

export const renderSideBar = () => {
  const $content = $(".side-bar__content");
  const url = new URL("/side_bar_menu", BASE_URL);

  return fetchData(url.href).then((data) => {
    const [digitalContent, shopByDepartment] = data;
    const digitalComponent = menuComponent(digitalContent);
    const shopByDepartmentComponent = menuComponent(shopByDepartment);

    $content.insertAdjacentHTML("beforeend", digitalComponent);
    $content.insertAdjacentHTML("beforeend", shopByDepartmentComponent);
  });
};

const menuComponent = ({ title, text }: sideBarMenu) => {
  const MAX_LENGTH = 4;

  if (text.length > MAX_LENGTH) {
    return hiddenMenuList({ title, text }, MAX_LENGTH);
  }

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

const hiddenMenuList = ({ title, text }: sideBarMenu, MAX_LENGTH: number) => {
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
  const $viewAllButton = $(".side-bar__view-all-button");
  const $hideButton = $(".side-bar__hide-button");
  const $hiddenMenuContainer = $(".side-bar__hidden-menu-container");

  $viewAllButton.addEventListener("click", () => showElement($hiddenMenuContainer));
  $hideButton.addEventListener("click", () => hideElement($hiddenMenuContainer));
};
