import { $ } from "../utils.js";

export const showLoginModalOnLoad = () => {
    document.addEventListener(
        "DOMContentLoaded",
        fadeInModal(".login-modal", 1000)
    );
};

export const fadeInModal = (modalClassName, time) => {
    const modal = $(modalClassName);
    setTimeout(() => {
        modal.classList.add("show");
    }, time);
};

export const hideModal = (modalClassName) => {
    const modal = $(modalClassName);
    modal.classList.remove("show");
};

export const addDimming = (className) => {
    const elem = $(className);
    elem.classList.add("dim");
};
export const removeDimming = (className) => {
    const elem = $(className);
    elem.classList.remove("dim");
};
