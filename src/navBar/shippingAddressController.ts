import { handleModalMouseLeave, mainDimmed } from "../modal/modal";
import { isShowElement, showElement } from "../utils/elementVisibility";

export const handleShippingAddressMouseEnter = () => {
  const $modal = document.querySelector(".shipping-address-modal");

  if (isShowElement($modal)) {
    return;
  }

  showElement($modal);

  const undimmed = mainDimmed();

  $modal?.addEventListener("mouseleave", (event) => handleModalMouseLeave(event, undimmed));
};
