export function modal() {
    const fadeInModal = (modal, time) => {
        setTimeout(() => {
            modal.classList.add("show");
        }, time);
    };
    function loginModal() {
        const loginModal = document.querySelector(".login-modal");
        document.addEventListener(
            "DOMContentLoaded",
            fadeInModal(loginModal, 1000)
        );
    }
    loginModal();

    function addressModal() {
        const address = document.querySelector(".address");
        const addressModal = document.querySelector(".address-modal");
        address.addEventListener("mouseover", (e) => {
            console.log(e.currentTarget === address);
            if (e.currentTarget === address) {
                fadeInModal(addressModal, 500);
            }
        });
    }

    addressModal();
}
