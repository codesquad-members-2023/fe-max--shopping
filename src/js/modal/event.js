import { fadeInModal, hideModal } from "./modal.js";
import { $, $All } from "../utils.js";
import { addDimming, removeDimming } from "../utils.js";

export const addLoginEventListeners = () => {
    const loginEvent = $(".login__event-wrap");
    let timerIdForModal;

    loginEvent.addEventListener("mouseenter", () => {
        hideModal(".login-modal");
        fadeInModal(".login-modal-ex");
        addDimming(".main");
        clearTimeout(timerIdForModal);
    });

    loginEvent.addEventListener("mouseleave", () => {
        timerIdForModal = setTimeout(() => {
            hideModal(".login-modal-ex");
            removeDimming(".main");
        }, 500);
    });
};

export const addAddressEventListeners = () => {
    const address = $(".address");
    let timerIdForModal;

    address.addEventListener("mouseenter", () => {
        fadeInModal(".address-modal");
        addDimming(".main");
        clearTimeout(timerIdForModal);
    });

    address.addEventListener("mouseleave", () => {
        timerIdForModal = setTimeout(() => {
            hideModal(".address-modal");
            removeDimming(".main");
        }, 500);
    });
};
