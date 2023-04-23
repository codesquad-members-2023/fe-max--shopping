import { $ } from "../../utils/domUtils";
import { dim, undim } from "../../utils/dimming";
import { Z_INDEX } from "../../constants/Z_INDEX";

export const addShippingAddressEventListeners = () => {
  const $shippingAddress = $(".shipping-address");

  $shippingAddress.addEventListener("mouseenter", () => dim(Z_INDEX.NAV_BAR - 50));
  $shippingAddress.addEventListener("mouseleave", undim);
};
