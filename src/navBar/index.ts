import { showLoginModalOnLoad } from "./loginModalController";
import { handleShippingAddressMouseEnter } from "./shippingAddressController";

export const initNavBar = () => {
  const $shippingAddressContainer = document.querySelector(".shipping-address-container");

  $shippingAddressContainer?.addEventListener("mouseenter", handleShippingAddressMouseEnter);

  showLoginModalOnLoad();
};
