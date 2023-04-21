import { dim, undim } from "../../utils/dimming";
import { Z_INDEX } from "../../constants/Z_INDEX";
import { hideElement, showElement } from "../../utils/elementVisibility";

export const openSideBar = ($sideBar: Element) => {
  showElement($sideBar);
  dim(Z_INDEX.SIDE_BAR - 50);
};

export const closeSideBar = ($sideBar: Element) => {
  hideElement($sideBar);
  undim();
};
