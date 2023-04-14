import { QUERY, OPACITY, Z_INDEX } from "../constant.js";
import { dim, undim } from "../common/dim.js";
import { setOpacity, setZindex } from "../util/set-style.js";

function hideAddressModal() {
  setOpacity(QUERY.ADDRESS_MODAL, OPACITY.ZERO);
  setZindex(QUERY.ADDRESS_MODAL, Z_INDEX.LOWEST_Z);
}

function openAddressModal() {
  setZindex(QUERY.ADDRESS_MODAL, Z_INDEX.HIGHEST_Z);
  setOpacity(QUERY.ADDRESS_MODAL, OPACITY.FULL);
  dim();
}

async function closeAddressModal() {
  undim();
  hideAddressModal();
}

function addressModalMouseenterEventHandler() {
  QUERY.ADDRESS_AREA.addEventListener("mouseenter", openAddressModal);
}

function addressModalMouseleaveEventHandler() {
  QUERY.ADDRESS_MODAL.addEventListener("mouseleave", closeAddressModal);
}

export { addressModalMouseenterEventHandler, addressModalMouseleaveEventHandler };
