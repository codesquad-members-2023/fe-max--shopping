import { handleNavBarLoginMouseEnter, showLoginModalOnLoad } from "./loginModalController";
import { handleShippingAddressMouseEnter } from "./shippingAddressController";

export const initNavBar = () => {
  const $navBar = document.querySelector(".nav-bar");
  const $shippingAddressContainer = $navBar?.querySelector(".shipping-address-container");
  const $loginContainer = $navBar?.querySelector(".nav-bar__login-container");

  $shippingAddressContainer?.addEventListener("mouseenter", handleShippingAddressMouseEnter);
  $loginContainer?.addEventListener("mouseenter", handleNavBarLoginMouseEnter);
  showLoginModalOnLoad($loginContainer);
};
