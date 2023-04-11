import { $, $All } from "../utils.js";

export const showLoginModalOnLoad = () => {
    const loginModal = $(".login-modal");
    const oneSecond = 1000;
    document.addEventListener(
        "DOMContentLoaded",
        fadeInModal(loginModal, oneSecond)
    );
};

export const fadeInModal = (modal, time) => {
    setTimeout(() => {
        modal.classList.add("show");
    }, time);
};

export const hideModal = (modal) => {
    modal.classList.remove("show");
};
