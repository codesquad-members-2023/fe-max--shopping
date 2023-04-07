import { handleNavBarMouseEnter } from "../modal/modal";
import { hideElement, showElement } from "../utils/elementVisibility";

export const showLoginModalOnLoad = ($loginContainer: Element | null | undefined) => {
  const $modal = document.querySelector("#login-modal");
  const id = setTimeout(() => {
    showElement($modal);
  }, 1000);

  $loginContainer?.addEventListener(
    "mouseenter",
    () => {
      clearTimeout(id);
      hideElement($modal);
    },
    { once: true }
  );
};

export const handleNavBarLoginMouseEnter = () => {
  const $modal = document.querySelector("#extend-login-modal");

  handleNavBarMouseEnter($modal);
};
