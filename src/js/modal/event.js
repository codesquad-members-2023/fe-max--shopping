import { fadeInModal, hideModal } from "./modal.js";
import { $, $All, addDimming, removeDimming } from "../utils.js";

export const addLoginEventListeners = () => {
    const loginEvent = $(".login__event-wrap");
    const loginModal = $(".login-modal");
    const loginModalEx = $(".login-modal-ex");
    const main = $(".main");

    let timerIdForModal;

    loginEvent.addEventListener("mouseenter", () => {
        hideModal(loginModal);
        fadeInModal(loginModalEx);
        addDimming(main);
        clearTimeout(timerIdForModal);
    });

    loginEvent.addEventListener("mouseleave", () => {
        const halfSecond = 500;
        timerIdForModal = setTimeout(() => {
            hideModal(loginModalEx);
            removeDimming(main);
        }, halfSecond);
    });
};

export const addAddressEventListeners = () => {
    const address = $(".address");
    const addressModal = $(".address-modal");
    const main = $(".main");
    let timerIdForModal;

    address.addEventListener("mouseenter", () => {
        fadeInModal(addressModal);
        addDimming(main);
        clearTimeout(timerIdForModal);
    });

    address.addEventListener("mouseleave", () => {
        const halfSecond = 500;
        timerIdForModal = setTimeout(() => {
            hideModal(addressModal);
            removeDimming(main);
        }, halfSecond);
    });
};
