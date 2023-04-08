import { constant } from "../constant.js";
import { dim, undim } from "./dim.js";
import { setOpacity, setZindex } from "../util/set-style.js";
import { delay } from "../util/delay-promise.js";

function hideAddressModal() {
  setOpacity(constant.addressModal, "0");
  setZindex(constant.addressModal, "-1");
}

function openAddressModal() {
  setZindex(constant.addressModal, "2");
  setOpacity(constant.addressModal, "1");
  dim();
}

async function closeAddressModal() {
  undim();
  hideAddressModal();
}

function addressModalMouseenterEventHandler() {
  constant.addressArea.addEventListener("mouseenter", openAddressModal);
}

function addressModalMouseleaveEventHandler() {
  constant.addressModal.addEventListener("mouseleave", closeAddressModal);
}

export {
  addressModalMouseenterEventHandler,
  addressModalMouseleaveEventHandler,
};
