import { dim, undim } from "../../utils/dimming";
import { Z_INDEX } from "../../constants/Z_INDEX";
import { hideElement, showElement } from "../../utils/elementVisibility";
import { BASE_URL } from "../../constants/BASE_URL";
import { fetchData } from "../../utils/fetchData";
import { menuComponent } from "./sideBarView";
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
  const $content = $(".side-bar__content");
  const url = new URL("side_bar_menu", BASE_URL);

  return fetchData(url).then((data) => {
    data.forEach((content: sideBarMenu) => {
      const component = menuComponent(content);

      $content.insertAdjacentHTML("beforeend", component);
    });
  });
};
