export function modal() {
    const hero = document.querySelector(".hero");
    const login = document.querySelector(".login");
    const loginModal = document.querySelector(".login-modal");
    const loginModalEx = document.querySelector(".login-modal-ex");
    const address = document.querySelector(".address");
    const addressModal = document.querySelector(".address-modal");

    function fadeInModal(modal, time) {
        setTimeout(() => {
            modal.classList.add("show");
        }, time);
    }
    function hideModal(modal) {
        modal.classList.remove("show");
        hero.classList.remove("dim");
    }
    //ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

    function showLoginModal() {
        document.addEventListener(
            "DOMContentLoaded",
            fadeInModal(loginModal, 1000)
        );
    }

    login.addEventListener("mouseover", (e) => {
        if (e.currentTarget === login) {
            hideModal(loginModal);
            fadeInModal(loginModalEx);
            hero.classList.add("dim");
        }
    });

    function hideLoginModal() {
        login.addEventListener("mouseout", (e) => {
            if (e.currentTarget === login) {
                hideModal(loginModalEx);
            }
        });
    }

    function showAddressModal() {
        address.addEventListener("mouseover", (e) => {
            if (e.currentTarget === address) {
                fadeInModal(addressModal, 500);
                hero.classList.add("dim");
            }
        });
    }

    function hideAddressModal() {
        address.addEventListener("mouseout", (e) => {
            if (e.currentTarget === address) {
                hideModal(addressModal);
            }
        });
    }
    showLoginModal();
    hideLoginModal();
    showAddressModal();
    hideAddressModal();
}
