import { addEventOnLoginModal, addEventOnAddressModal } from "./Modal-event.js";

export function initModalEvent() {
  addEventOnLoginModal();
  addEventOnAddressModal();
}
