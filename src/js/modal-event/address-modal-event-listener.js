import { querySelector } from "../query.js";
import { OPACITY, Z_INDEX } from "../constant.js";
import { dim, undim } from "../common/dim.js";
import { setOpacity, setZindex } from "../util/set-style.js";

function hideAddressModal() {
  setOpacity(querySelector.addressModal(), OPACITY.ZERO);
  setZindex(querySelector.addressModal(), Z_INDEX.LOWEST_Z);
}

function openAddressModal() {
  setZindex(querySelector.addressModal(), Z_INDEX.HIGH_Z);
  setOpacity(querySelector.addressModal(), OPACITY.FULL);
  dim();
}

async function closeAddressModal() {
  undim();
  hideAddressModal();
}

function addressModalMouseenterEventHandler() {
  querySelector.addressArea().addEventListener("mouseenter", openAddressModal);
}

function addressModalMouseleaveEventHandler() {
  querySelector.addressModal().addEventListener("mouseleave", closeAddressModal);
}

export { addressModalMouseenterEventHandler, addressModalMouseleaveEventHandler };
