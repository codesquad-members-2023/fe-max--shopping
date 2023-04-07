import { mainDimmed } from "../modal/modal";
import { shippingAddressModalView } from "./shippingAddressView";

export const handleShippingAddressMouseEnter = (event: Event) => {
  const $shippingAddress = document.querySelector(".shipping-address");
  const $shippingAddressContainer = event.currentTarget as HTMLElement;

  if ($shippingAddressContainer.classList.contains("open")) {
    return;
  }

  appendShippingAddressModalView($shippingAddress, shippingAddressModalView);

  const undimmed = mainDimmed();
  const $modal = document.querySelector(".shipping-address-modal");

  $shippingAddressContainer.classList.add("open");
  $modal?.addEventListener("mouseleave", (event) =>
    handleModalMouseLeave(event, $shippingAddressContainer, undimmed)
  );
};

const appendShippingAddressModalView = (targetElement: Element | null, view: string) => {
  targetElement?.insertAdjacentHTML("beforeend", view);
};

const handleModalMouseLeave = (
  event: Event,
  $loginContainer: HTMLElement,
  undimmed: () => void
) => {
  const $shippingAddress = event.currentTarget as HTMLElement;

  const id = setTimeout(() => {
    setTimeout(() => $shippingAddress?.remove(), 500);
    $shippingAddress?.classList.add("fadeOut");
    $loginContainer.classList.remove("open");
    undimmed();
  }, 500);

  $shippingAddress?.addEventListener(
    "mouseover",
    () => {
      clearTimeout(id);
    },
    { once: true }
  );
};
