export function modal() {
    const hero = document.querySelector(".hero");

    const fadeInModal = (modal, time) => {
        setTimeout(() => {
            modal.classList.add("show");
        }, time);
    };
    function showLoginModal() {
        const loginModal = document.querySelector(".login-modal");
        document.addEventListener(
            "DOMContentLoaded",
            fadeInModal(loginModal, 1000)
        );
    }
    showLoginModal();

    function showAddressModal() {
        const address = document.querySelector(".address");
        const addressModal = document.querySelector(".address-modal");
        address.addEventListener("mouseover", (e) => {
            if (e.currentTarget === address) {
                fadeInModal(addressModal, 500);
                hero.classList.add("dim");
            }
        });
    }

    showAddressModal();

    const hideModal = (modal) => {
        modal.classList.remove("show");
    };

    function hideAddressModal() {
        const address = document.querySelector(".address");
        const addressModal = document.querySelector(".address-modal");
        address.addEventListener("mouseout", (e) => {
            if (e.currentTarget === address) {
                hideModal(addressModal);
                hero.classList.remove("dim");
            }
        });
    }

    hideAddressModal();
}
