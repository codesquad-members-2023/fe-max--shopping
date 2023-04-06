import { fadeInModal, hideModal, addDimming, removeDimming } from "./modal.js";

export function attachLoginEventListeners() {
    const login = document.querySelector(".login");

    login.addEventListener("mouseenter", function () {
        hideModal(".login-modal");
        fadeInModal(".login-modal-ex");
        addDimming(".hero");
    });

    login.addEventListener("mouseleave", function () {
        hideModal(".login-modal-ex");
        removeDimming(".hero");
    });
}

export function attachAddressEventListeners() {
    const address = document.querySelector(".address");

    address.addEventListener("mouseenter", function () {
        fadeInModal(".address-modal");
        addDimming(".hero");
    });

    address.addEventListener("mouseleave", function () {
        hideModal(".address-modal");
        removeDimming(".hero");
    });
}
