import { $ } from "../../utils/domUtils";
import { showElement } from "../../utils/elementVisibility";

export const handleViewAllButtonClick = () => {
  const $hiddenMenuContainer = $(".side-bar__hidden-menu-container");

  showElement($hiddenMenuContainer);
};
