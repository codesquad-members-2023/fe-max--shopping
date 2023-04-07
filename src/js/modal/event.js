import { fadeInModal, hideModal, addDimming, removeDimming } from "./modal.js";
import { $, $All } from "../utils.js";

export const addLoginEventListeners = () => {
    const loginEvent = $(".login__event-wrap");
    let timerIdForModal;

    loginEvent.addEventListener("mouseenter", () => {
        hideModal(".login-modal");
        fadeInModal(".login-modal-ex");
        addDimming(".hero");
        clearTimeout(timerIdForModal);
    });

    loginEvent.addEventListener("mouseleave", () => {
        timerIdForModal = setTimeout(() => {
            hideModal(".login-modal-ex");
            removeDimming(".hero");
        }, 500);
    });
};

export const addAddressEventListeners = () => {
    const address = $(".address");
    let timerIdForModal;

    address.addEventListener("mouseenter", () => {
        fadeInModal(".address-modal");
        addDimming(".hero");
        clearTimeout(timerIdForModal);
    });

    address.addEventListener("mouseleave", () => {
        timerIdForModal = setTimeout(() => {
            // 1초 후에 이벤트 발생
            hideModal(".address-modal");
            removeDimming(".hero");
        }, 500);
    });
};
