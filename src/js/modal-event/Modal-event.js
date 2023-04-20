import { openAddressModal, closeAddressModal } from "./Address-modal.js";
import {
  openLoginModalWithDelay,
  expandLoginModal,
  closeLoginModal,
  reopenLoginModal,
} from "./Login-modal.js";
import { querySelector } from "../query.js";

function autoOpenLoginModal() {
  document.addEventListener("DOMContentLoaded", openLoginModalWithDelay);
}

function expandLoginModalEnterMouse() {
  querySelector.loginArea().addEventListener("mouseenter", expandLoginModal, {
    once: true,
  });
}

function closeLoginModalLeaveMouse() {
  querySelector.loginArea().addEventListener("mouseleave", closeLoginModal);
}

function reopenLoginModalOnClick() {
  querySelector.loginArea().addEventListener("click", reopenLoginModal);
}

function openAddressModalEnterMouse() {
  querySelector.addressArea().addEventListener("mouseenter", openAddressModal);
}

function closeAddressModalLeaveMouse() {
  querySelector.addressModal().addEventListener("mouseleave", closeAddressModal);
}

function addEventOnLoginModal() {
  autoOpenLoginModal();
  expandLoginModalEnterMouse();
  closeLoginModalLeaveMouse();
  reopenLoginModalOnClick();
}

function addEventOnAddressModal() {
  openAddressModalEnterMouse();
  closeAddressModalLeaveMouse();
}

export function initModalEvent() {
  addEventOnLoginModal();
  addEventOnAddressModal();
}
