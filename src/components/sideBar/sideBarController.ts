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

export interface SideBarMenu {
  title: string;
  menu: { id: number; text: string }[];
}

export const renderSideBar = () => {
  const $menu = $(".side-bar__menu");
  const url = new URL("side_bar_menu", BASE_URL);

  return fetchData(url).then((menuList) => {
    menuList.forEach((menu: SideBarMenu) => {
      const MAX_LENGTH = 4;
      const isOverMaxLength = menu.menu.length > MAX_LENGTH;
      const component = isOverMaxLength
        ? hiddenMenuComponent(menu, MAX_LENGTH)
        : menuComponent(menu);

      $menu.insertAdjacentHTML("beforeend", component);
    });
  });
};

export const handleMenuItemClick = ({ target }: Event) => {
  if (target == null || !(target instanceof Element)) {
    return;
  }

  const li = target.closest("li");

  if (li == null) {
    return;
  }

  const isMenuItemClick = li.classList.contains("side-bar__menu-item");

  if (isMenuItemClick && li.dataset.id != null) {
    const menuId = li.dataset.id;

    fetchMenuDetailData(menuId).then((data) => {
      renderDetailView(data);
      moveDetailView();
    });
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

const fetchMenuDetailData = async (id: string) => {
  return fetchData(`${BASE_URL}/side_bar_menu_details/${id}`);
};

const renderDetailView = (data: SideBarMenu) => {
  const $menuDetailContainer = $(".side-bar__menu-detail-container");
  const component = menuComponent(data);

  $menuDetailContainer.innerHTML = component;
};

const moveDetailView = () => {
  const $menuContainer = $(".side-bar__menu-container");

  $menuContainer.classList.add("detail-view");
};

export const moveMenuView = () => {
  const $menuContainer = $(".side-bar__menu-container");

  $menuContainer.classList.remove("detail-view");
};
