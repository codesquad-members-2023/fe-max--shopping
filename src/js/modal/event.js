import { fadeInModal, hideModal, addDimming, removeDimming } from "./modal.js";
import { $ } from "../utils.js";

export const addLoginEventListeners = () => {
    const login = $(".login");

    login.addEventListener("mouseenter", () => {
        hideModal(".login-modal");
        fadeInModal(".login-modal-ex");
        addDimming(".hero");
    });

    login.addEventListener("mouseleave", () => {
        hideModal(".login-modal-ex");
        removeDimming(".hero");
    });
};

export const addAddressEventListeners = () => {
    const address = $(".address");

    address.addEventListener("mouseenter", () => {
        fadeInModal(".address-modal");
        addDimming(".hero");
    });

    address.addEventListener("mouseleave", () => {
        hideModal(".address-modal");
        removeDimming(".hero");
    });
};
