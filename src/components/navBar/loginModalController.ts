import { $ } from "../../utils/domUtils";
import { dim, undim } from "../../utils/dimming";
import { hideElement, showElement } from "../../utils/elementVisibility";
import { Z_INDEX } from "../../constants/Z_INDEX";

export const showLoginModalOnLoad = () => {
  const $modal = $("#login-modal");
  const $loginContainer = $(".nav-bar__login-container");

  const setTimeoutId = setTimeout(() => {
    showElement($modal);
  }, 1000);

  $loginContainer.addEventListener(
    "mouseenter",
    () => {
      clearTimeout(setTimeoutId);
      hideElement($modal);
    },
    { once: true }
  );
};

export const addLoginEventListeners = () => {
  const $loginContainer = $(".nav-bar__login-container");
  const $modal = $("#extend-login-modal");

  $loginContainer.addEventListener("mouseenter", () => handleLoginContainerMouseEnter($modal));
  $modal.addEventListener("mouseleave", () => handleModalMouseLeave($modal));
};

const handleLoginContainerMouseEnter = ($modal: Element) => {
  showElement($modal);
  dim(Z_INDEX.NAV_BAR - 50);
};

const handleModalMouseLeave = ($modal: Element) => {
  hideElement($modal);
  undim();
};
