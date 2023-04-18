import { $ } from "../../utils/domUtils";
import { dimMain, undimMain } from "../../utils/dimming";

export const addShippingAddressEventListeners = () => {
  const $shippingAddress = $(".shipping-address");

  $shippingAddress.addEventListener("mouseenter", dimMain);
  $shippingAddress.addEventListener("mouseleave", undimMain);
};
