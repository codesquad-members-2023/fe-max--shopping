import { dim, undim } from "../../utils/dimming";
import { Z_INDEX } from "../../constants/Z_INDEX";
import { hideElement, showElement } from "../../utils/elementVisibility";
import { BASE_URL } from "../../constants/BASE_URL";
import { fetchData } from "../../utils/fetchData";
import { hiddenMenuComponent, menuComponent } from "./sideBarView";
import { $ } from "../../utils/domUtils";

export const openSideBar = ($sideBar: Element) => {
  showElement($sideBar);
  dim(Z_INDEX.SIDE_BAR - 50);
};

export const closeSideBar = ($sideBar: Element) => {
  hideElement($sideBar);
  undim();
};

export interface sideBarMenu {
  title: string;
  text: string[];
}

export const renderSideBar = () => {
  const $menu = $(".side-bar__menu");
  const url = new URL("side_bar_menu", BASE_URL);

  return fetchData(url).then((menuList) => {
    menuList.forEach((menu: sideBarMenu) => {
      const MAX_LENGTH = 4;
      const isOverMaxLength = menu.text.length > MAX_LENGTH;
      const component = isOverMaxLength
        ? hiddenMenuComponent(menu, MAX_LENGTH)
        : menuComponent(menu);

      $menu.insertAdjacentHTML("beforeend", component);
    });
  });
};

export const handleMenuViewButtonClick = ({ target }: Event) => {
  if (target == null || !(target instanceof Element)) {
    return;
  }

  const li = target.closest("li");

  if (li == null) {
    return;
  }

  const isViewAllButtonClick = li.classList.contains("side-bar__view-all-button");
  const isHideButtonClick = li.classList.contains("side-bar__hide-button");

  if (isViewAllButtonClick) {
    const $hiddenMenuContainer = $(".side-bar__hidden-menu-container");
    showElement($hiddenMenuContainer);

    return;
  }

  if (isHideButtonClick) {
    const $hiddenMenuContainer = $(".side-bar__hidden-menu-container");
    hideElement($hiddenMenuContainer);

    return;
  }
};
