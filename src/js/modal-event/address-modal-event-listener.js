import { query, opacity, zIndex } from "../constant.js";
import { dim, undim } from "./dim.js";
import { setOpacity, setZindex } from "../util/set-style.js";

function hideAddressModal() {
  setOpacity(query.addressModal, opacity.zero);
  setZindex(query.addressModal, zIndex.lowestZ);
}

function openAddressModal() {
  setZindex(query.addressModal, zIndex.highestZ);
  setOpacity(query.addressModal, opacity.full);
  dim();
}

async function closeAddressModal() {
  undim();
  hideAddressModal();
}

function addressModalMouseenterEventHandler() {
  query.addressArea.addEventListener("mouseenter", openAddressModal);
}

function addressModalMouseleaveEventHandler() {
  query.addressModal.addEventListener("mouseleave", closeAddressModal);
}

export {
  addressModalMouseenterEventHandler,
  addressModalMouseleaveEventHandler,
};
