import { $ } from "../../utils/domUtils";
import { ensureHTMLElement } from "../../utils/typeCheckUtils";

export const openSideBar = () => {
  const $sideBar = ensureHTMLElement($(".side-bar"));

  $sideBar.style.transform = `translateX(100%)`;
};
