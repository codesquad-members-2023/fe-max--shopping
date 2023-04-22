import { querySelector } from "../query.js";
import { OPACITY, Z_INDEX } from "../constant.js";
import { dim, undim } from "../common/dim.js";
import { setOpacity, setZindex } from "../util/set-style.js";

function hideAddressModal() {
  setOpacity(querySelector.addressModal(), OPACITY.ZERO);
  setZindex(querySelector.addressModal(), Z_INDEX.LOWEST_Z);
}

export function openAddressModal() {
  setZindex(querySelector.addressModal(), Z_INDEX.HIGH_Z);
  setOpacity(querySelector.addressModal(), OPACITY.FULL);
  dim();
}

export async function closeAddressModal() {
  undim();
  hideAddressModal();
}
