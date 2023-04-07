import { handleModalMouseLeave, mainDimmed } from "../modal/modal";
import { shippingAddressModalView } from "./shippingAddressView";

export const handleShippingAddressMouseEnter = (event: Event) => {
  const $shippingAddressContainer = event.currentTarget as HTMLElement;

  if ($shippingAddressContainer.classList.contains("open")) {
    return;
  }

  $shippingAddressContainer.classList.add("open");
  appendShippingAddressModalView(shippingAddressModalView);

  const undimmed = mainDimmed();
  const $modal = document.querySelector(".shipping-address-modal");

  $modal?.addEventListener("mouseleave", (event) =>
    handleModalMouseLeave(event, $shippingAddressContainer, undimmed)
  );
};

const appendShippingAddressModalView = (view: string) => {
  const $shippingAddress = document.querySelector(".shipping-address");

  $shippingAddress?.insertAdjacentHTML("beforeend", view);
};
