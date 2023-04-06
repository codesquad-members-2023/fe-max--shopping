export function showLoginModalOnLoad() {
    document.addEventListener(
        "DOMContentLoaded",
        fadeInModal(".login-modal", 1000)
    );
}

export function fadeInModal(modalClassName, time) {
    const modal = document.querySelector(modalClassName);
    setTimeout(() => {
        modal.classList.add("show");
    }, time);
}

export function hideModal(modalClassName) {
    const modal = document.querySelector(modalClassName);
    modal.classList.remove("show");
}

export function addDimming(className) {
    const elem = document.querySelector(className);
    elem.classList.add("dim");
}
export function removeDimming(className) {
    const elem = document.querySelector(className);
    elem.classList.remove("dim");
}
